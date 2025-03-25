<template>
  <article class="book">
    <button class="book-title" @click="seeDetails(book.id)">
      {{ book.title }}
    </button>
    <div class="book-author">{{ book.author }}</div>
    <div class="book-cover">
      <img :src="imagePath" :alt="book.title" :title="book.title" />
    </div>
    <div class="book-read-state">
      <p>
        Already read:
        <button class="read-toggle-button" @click="toggleReadStatus(book.id)">
          <img
            :src="book.alreadyRead ? `icons/yes.png` : `icons/no.png`"
            alt="Is already read"
            :title="book.alreadyRead ? 'Read' : 'Not read'"
          />
        </button>
      </p>
    </div>
    <div class="book-btns">
      <button class="btn btn-delete" @click="deleteBook(book.id)">
        Delete
      </button>
      <button class="btn btn-details" @click="seeDetails(book.id)">
        Details
      </button>
    </div>

    <h3 v-if="$route.query.id">Nome (query): {{ $route.query.id }}</h3>
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
    toggleReadStatus(id) {
      this.$store.dispatch('toggleReadStatus', id);
    },
  },
};
</script>

<style>
.book {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: white;
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
}

.book-title {
  font-size: 1.5rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
}

.book-author {
  margin-top: 0.5rem;
  font-style: italic;
}

.book-cover {
  margin-top: 1rem;
}

.book-read-state {
  margin-top: 1rem;
}

.book-btns {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
}

.btn-delete:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}

.btn-details {
  background-color: #3498db;
  color: white;
}

.btn-details:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

.read-toggle-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  vertical-align: middle;
}

.read-toggle-button:hover {
  opacity: 0.8;
}
</style>
