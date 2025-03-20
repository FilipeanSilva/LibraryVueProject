<template>
  <article class="book-card">
    <div class="book-cover">
      <img :src="imagePath" :alt="book.title" :title="book.title" />
      <div class="book-status" :class="{ 'status-read': book.alreadyRead }">
        {{ book.alreadyRead ? 'Read' : 'Unread' }}
      </div>
    </div>
    
    <div class="book-info">
      <h3 class="book-title" @click="seeDetails(book.id)">
        {{ book.title }}
      </h3>
      <p class="book-author">by {{ book.author }}</p>
      
      <div class="book-actions">
        <button class="action-button details-button" @click="seeDetails(book.id)">
          Details
        </button>
        <button class="action-button delete-button" @click="deleteBook(book.id)">
          Delete
        </button>
      </div>
    </div>
    
    <h3 v-if="$route.query.id" class="query-info">Name (query): {{ $route.query.id }}</h3>
  </article>
</template>

<script>
export default {
  name: 'Book',
  props: ['book'],
  computed: {
    imagePath() {
      return `${import.meta.env.BASE_URL}livros/${this.book.imageUrl}`;
    },
  },
  methods: {
    deleteBook(id) {
      this.$store.dispatch('deleteBook', id);
    },
    seeDetails(id) {
      this.$router.push({ name: 'dashboard', query: { id: id } });
    },
  },
};
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.book-cover {
  position: relative;
  overflow: hidden;
}

.book-cover img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.book-card:hover .book-cover img {
  transform: scale(1.05);
}

.book-status {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e53e3e;
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-read {
  background-color: #38a169;
}

.book-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.book-title {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0 0 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.book-title:hover {
  color: var(--accent-color);
}

.book-author {
  font-style: italic;
  color: #718096;
  margin: 0 0 1.5rem;
}

.book-actions {
  margin-top: auto;
  display: flex;
  gap: 0.8rem;
}

.action-button {
  flex: 1;
  padding: 0.6rem 0;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.details-button {
  background-color: var(--primary-color);
  color: white;
}

.details-button:hover {
  background-color: #2d3748;
}

.delete-button {
  background-color: #f56565;
  color: white;
}

.delete-button:hover {
  background-color: #c53030;
}

.query-info {
  padding: 0.5rem;
  background-color: #f8fafc;
  margin: 0;
  font-size: 0.9rem;
  color: #4a5568;
}
</style>