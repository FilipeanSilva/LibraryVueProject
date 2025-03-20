<template>
  <div class="book-list-container">
    <div v-if="books.length === 0" class="empty-state">
      <div class="empty-icon">📚</div>
      <h3>No books found</h3>
      <p>There are no books to display at the moment.</p>
    </div>
    
    <section v-else class="books-grid">
      <Book
        v-for="book in books"
        :key="book.id"
        :book="book"
        class="book-item"
      ></Book>
    </section>
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'BookList',
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Book,
  },
};
</script>

<style scoped>
.book-list-container {
  margin-top: 1rem;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.book-item {
  height: 100%;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #f8fafc;
  border-radius: var(--border-radius);
  text-align: center;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #a0aec0;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin: 0 0 0.5rem;
}

.empty-state p {
  color: #718096;
  max-width: 300px;
}
</style>