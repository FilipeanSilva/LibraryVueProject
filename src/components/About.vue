<template>
  <div class="about-container">
    <h1>Filipe Silva</h1>
    <p class="subtitle">Web Developer | Computer Engineer | Tech Enthusiast</p>
    <p class="description">
      Passionate about software development, cryptography, and solving complex problems. 
      Always learning, always building. 🚀
    </p>
    <p class="signature">Made by me 😁</p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.description {
  font-size: 1rem;
  max-width: 600px;
  margin: 10px auto;
  color: #444;
}

.signature {
  font-style: italic;
  margin-top: 15px;
}
</style>
