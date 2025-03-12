<template>
  <h1>Book Dashboard</h1>
  <button @click="showReadBooks = !showReadBooks">{{ buttonText }}</button>
  <component :is="currentComponent" v-bind="componentProps" />
</template>

<script>
import BookList from './BookList.vue';
import BookDetails from './BookDetails.vue';

export default {
  name: 'BookDashboard',
  data() {
    return {
      showReadBooks: false,
    };
  },
  computed: {
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
};
</script>

<style></style>