<template>
  <article class="book">
    <button class="book-title" @click="seeDetails(book.id)">
      {{ book.title }}
    </button>
    <div class="book-author">{{ book.author }}</div>
    <div class="book-cover">
      <img
        :src="`/livros/${book.imageUrl}`"
        :alt="book.title"
        :title="book.title"
      />
    </div>
    <div class="book-read-state">
      <p>
        Already read:
        <span>
          <img
            :src="
              book.alreadyRead
                ? `src/assets/icons/yes.png`
                : `src/assets/icons/no.png`
            "
            alt="Is already read"
            :title="book.alreadyRead ? 'Read' : 'Not read'"
          />
        </span>
      </p>
    </div>
    <div class="book-delete">
      <button @click="deleteBook(book.id)">Delete</button>
    </div>
    
    <h3 v-if="$route.query.id ">Nome (query): {{ $route.query.id }}</h3>

  </article>
</template>

<script>
export default {
  name: 'Book',
  props: ['book'],
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
