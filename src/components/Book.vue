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
    <div class="book-delete">
      <button @click="deleteBook(book.id)">Delete</button>
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
    }
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

.book-delete {
  margin-top: 1rem;
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