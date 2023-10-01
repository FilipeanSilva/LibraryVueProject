<template>
  <section class="grid">
    <Book
      v-for="book in books"
      :key="book.id"
      :book="book"
      class="grid-item"
    ></Book>
  </section>
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

<style>
.section.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5px;
}
</style>
