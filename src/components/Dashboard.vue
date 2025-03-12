<template>
  <h1>Book Dashboard</h1>
  <button @click="showReadBooks = !showReadBooks">{{ buttonText }}</button>

  <input type="text" v-model="searchQuery" placeholder="Search books..." />

  <ul v-if="filteredBooks.length">
    <li v-for="book in filteredBooks" :key="book.id">
      {{ book.title }}
    </li>
  </ul>

  <component :is="currentComponent" v-bind="componentProps" />
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
      return !this.searchQuery.trim()
        ? []
        : this.getBooks.filter((book) =>
            book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
    },
    buttonText() {
      return this.showReadBooks ? 'Show all books' : 'Books readed';
    },
    selectedBook() {
      const bookId = this.$route.query.id;
      return this.$store.getters.getBookById(bookId);
    },
    visibleBookList() {
      return this.showReadBooks
        ? this.$store.getters.getBooksReaded
        : this.$store.getters.getBooks;
    },
    currentComponent() {
      return this.$route.query.id ? BookDetails : BookList;
    },
    componentProps() {
      return this.$route.query.id
        ? { book: this.selectedBook }
        : { books: this.visibleBookList };
    },
  },
  components: { BookList, BookDetails },
  mounted() {
    this.$store.dispatch('getProductItems'); // Carrega os livros ao montar o componente
  },
};
</script>
