<template>
  <div class="home">
    <div class="hero-section">
      <h1>Welcome to My Library</h1>
      <p class="hero-text">Discover a world of books and immerse yourself in endless stories, knowledge, and imagination.</p>
      <router-link to="/dashboard" class="cta-button">Browse Books</router-link>
    </div>
    
    <div class="features-section">
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h3>Extensive Collection</h3>
        <p>Browse through hundreds of books across various genres and categories.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🔍</div>
        <h3>Easy Search</h3>
        <p>Find your next favorite book with our powerful search feature.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">📝</div>
        <h3>Track Your Reading</h3>
        <p>Keep track of books you've read and those on your reading list.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hero-section {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(rgba(74, 85, 104, 0.05), rgba(74, 85, 104, 0.1));
  border-radius: var(--border-radius);
}

.hero-section h1 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.hero-text {
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #dd6b20;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.feature-card {
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .features-section {
    grid-template-columns: 1fr;
  }
}
</style>