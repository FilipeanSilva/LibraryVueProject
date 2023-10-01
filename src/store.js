import { createStore } from 'vuex';

const state = {
  books: [],
};

const mutations = {
  UPDATE_BOOKS(state, payload) {
    state.books = payload;
  },
  DELETE_BOOK(state, id) {
    let newBooks = this.state.books.filter((book) => book.id !== id);
    state.books = newBooks;
  },
  GET_BOOK(state, id) {
    let filteredBooks = state.books.filter((book) => book.id === id);
    state.book = filteredBooks.length > 0 ? filteredBooks[0] : null;
  },

  GET_BOOKS_READED(state) {
    let filteredBooks = state.books.filter((book) => book.alreadyRead === true);
    state.book = filteredBooks.length > 0 ? filteredBooks[0] : null;
  },
};

const actions = {
  getProductItems(context) {
    fetch('http://localhost:3000/books')
      .then((resp) => resp.json())
      .then((data) => context.commit('UPDATE_BOOKS', data))
      .catch((err) => 'Error while fetching books: ' + err.message);
  },

  deleteBook(context, payload) {
    context.commit('DELETE_BOOK', payload);
  },

  getBook(context, payload) {
    context.commit('GET_BOOK', payload);
  },

  getBooksReaded(context, payload) {
    context.commit('GET_BOOKS_READED', payload);
  },
};

const getters = {
  getBooks: (state) => state.books,
  getBookById: (state) => (id) => state.books.find((book) => book.id == id),
  getBooksReaded: (state) =>
    state.books.filter((book) => book.alreadyRead == true),
};

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
});
