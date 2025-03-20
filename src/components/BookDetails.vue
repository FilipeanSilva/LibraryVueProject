<template>
  <div class="book-details">
    <div class="details-header">
      <button v-if="showBackButton" @click="goBack" class="back-button">
        ← Back to Books
      </button>
    </div>

    <div class="details-content">
      <div class="book-image">
        <img :src="bookImageSrc" :alt="book.title" :title="book.title" />
      </div>

      <div class="book-info">
        <h2 class="book-title">{{ book.title }}</h2>
        <h3 class="book-author">by {{ book.author }}</h3>

        <div class="book-status" :class="{ 'status-read': book.alreadyRead }">
          {{
            book.alreadyRead
              ? 'You have read this book'
              : 'You have not read this book yet'
          }}
        </div>

        <div class="description-section">
          <h4 class="section-title">Description</h4>
          <p class="book-description">
            {{ book.description || 'No description available.' }}
          </p>
        </div>

        <button class="action-button" v-if="showBackButton" @click="goBack">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetails',
  props: ['book'],
  computed: {
    bookImageSrc() {
      return `${import.meta.env.BASE_URL}livros/${this.book.imageUrl}`;
    },
    showBackButton() {
      return this.$route.query.id !== undefined;
    },
  },
  methods: {
    seeDetails(id) {
      this.$router.push({ name: 'dashboard', query: { id } });
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.book-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.details-header {
  display: flex;
  justify-content: flex-start;
}

.back-button {
  background-color: transparent;
  color: var(--primary-color);
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: var(--accent-color);
}

.details-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.book-image {
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color: #f8fafc;
}

.book-image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.book-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.book-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin: 0;
}

.book-author {
  font-size: 1.2rem;
  color: #718096;
  font-style: italic;
  margin: 0;
}

.book-status {
  padding: 0.8rem;
  background-color: #fed7d7;
  color: #9b2c2c;
  border-radius: 4px;
  font-weight: 600;
}

.status-read {
  background-color: #c6f6d5;
  color: #276749;
}

.description-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-title {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0;
}

.book-description {
  line-height: 1.6;
  color: #4a5568;
}

.action-button {
  align-self: flex-start;
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.action-button:hover {
  background-color: #dd6b20;
}

@media (max-width: 768px) {
  .details-content {
    grid-template-columns: 1fr;
  }

  .book-image {
    padding: 1rem;
  }

  .book-info {
    padding: 1.5rem;
  }

  .book-title {
    font-size: 1.5rem;
  }
}
</style>
