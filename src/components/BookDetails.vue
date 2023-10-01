<template>
  <article class="book">
    <h2 class="book-title" @click="seeDetails(book.id)">
      Title: {{ book.title }}
    </h2>
    <h2 class="book-author">Author: {{ book.author }}</h2>
    <button v-if="showBackButton" @click="goBack">Back</button>
    <div class="book-cover">
      <img :src="bookImageSrc" :alt="book.title" :title="book.title" />
    </div>
    <div>
      <p>{{ book.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BookDetails',
  props: ['book'],
  computed: {
    bookImageSrc() {
      return `src/assets/livros/${this.book.imageUrl}`;
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

<style>
.book {
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
}

.book-title {
  font-size: 1.5rem;
  font-weight: bold;
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

.book-delete {
  margin-top: 1rem;
}
</style>
