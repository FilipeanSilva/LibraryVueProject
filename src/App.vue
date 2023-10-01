<template>
  <section>
    <h1>This is my library website</h1>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getProductItems');
  },
};
</script>

<style>
section {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
