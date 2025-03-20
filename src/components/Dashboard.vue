<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Book Dashboard</h1>
      <div class="dashboard-controls">
        <div class="search-container">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search books..." 
            class="search-input"
          />
          <div class="search-icon">🔍</div>
        </div>
        
        <button @click="showReadBooks = !showReadBooks" class="toggle-button">
          {{ buttonText }}
        </button>
      </div>
    </div>
    
    <component :is="currentComponent" v-bind="componentProps" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BookList from './BookList.vue';
import BookDetails from './BookDetails.vue';

export default {
  name: 'BookDashboard',
  data() {
    return {
      showReadBooks: false,
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters(['getBooks']),
    filteredBooks() {
      if (!this.searchQuery.trim()) {
        // If search is empty, return the appropriate book list based on showReadBooks
        return this.showReadBooks
          ? this.$store.getters.getBooksReaded
          : this.$store.getters.getBooks;
      }
      
      // Filter books based on search query
      const query = this.searchQuery.toLowerCase().trim();
      const booksToFilter = this.showReadBooks
          ? this.$store.getters.getBooksReaded
          : this.$store.getters.getBooks;
          
      return booksToFilter.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
      );
    },
    buttonText() {
      return this.showReadBooks ? 'Show all books' : 'Books read';
    },
    selectedBook() {
      const bookId = this.$route.query.id;
      return this.$store.getters.getBookById(bookId);
    },
    currentComponent() {
      return this.$route.query.id ? BookDetails : BookList;
    },
    componentProps() {
      return this.$route.query.id
        ? { book: this.selectedBook }
        : { books: this.filteredBooks }; // Pass filteredBooks instead of visibleBookList
    },
  },
  components: { BookList, BookDetails },
  mounted() {
    this.$store.dispatch('getProductItems'); // Loads books when component mounts
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.dashboard-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dashboard-header h1 {
  color: var(--primary-color);
  font-size: 2rem;
  margin: 0;
}

.dashboard-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 30px;
  outline: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(237, 137, 54, 0.2);
}

.search-icon {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
}

.toggle-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #2d3748;
}

@media (max-width: 768px) {
  .dashboard-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-container {
    max-width: none;
  }
}
</style>