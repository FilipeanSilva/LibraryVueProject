<template>
  <div class="app-container">
    <header>
      <div class="header-content">
        <div class="logo">
          <span class="book-icon">📚</span>
          <h1 class="site-title">My Library</h1>
        </div>
      </div>
      
      <nav class="main-nav">
        <router-link to="/home" class="nav-link">
          <span class="nav-icon">🏠</span> Home
        </router-link>
        <router-link to="/dashboard" class="nav-link">
          <span class="nav-icon">📊</span> Dashboard
        </router-link>
        <router-link to="/about" class="nav-link">
          <span class="nav-icon">ℹ️</span> About
        </router-link>
      </nav>
    </header>
    
    <main class="content-area">
      <router-view></router-view>
    </main>
    
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About My Library</h4>
          <p>A personal collection of books and reading materials to track your literary journey.</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; 2025 My Library. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>