<template>
  <div class="app-container">
    <header>
      <div class="header-content">
        <div class="logo">
          <span class="book-icon">📚</span>
          <h1 class="site-title">My Library</h1>
        </div>
        <div class="search-box">
          <input type="text" placeholder="Search books..." />
          <button><span>🔍</span></button>
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

<style>
:root {
  --primary-color: #4a5568;
  --secondary-color: #f7fafc;
  --accent-color: #ed8936;
  --text-color: #2d3748;
  --light-text: #fff;
  --dark-bg: #2d3748;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--secondary-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
header {
  background-color: var(--primary-color);
  color: var(--light-text);
  padding: 1rem;
  box-shadow: var(--shadow);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
}

.logo {
  display: flex;
  align-items: center;
}

.book-icon {
  font-size: 2rem;
  margin-right: 0.5rem;
}

.site-title {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.search-box {
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 0.2rem;
}

.search-box input {
  background: transparent;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  color: var(--light-text);
  width: 200px;
}

.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-box button {
  background: var(--accent-color);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-box button:hover {
  background: #dd6b20;
}

.main-nav {
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  border-radius: var(--border-radius);
}

.nav-link {
  color: var(--light-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  border-radius: 4px;
}

.nav-icon {
  margin-right: 0.5rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--accent-color);
}

.router-link-active {
  background-color: var(--accent-color);
  color: var(--light-text);
}

/* Main Content Area */
.content-area {
  flex: 1;
  padding: 2rem;
  margin: 2rem 0;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

/* Footer */
.site-footer {
  background-color: var(--dark-bg);
  color: var(--light-text);
  padding: 2rem 0 0;
  margin-top: auto;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 2rem;
}

.footer-section {
  flex: 1;
  padding: 0 1rem;
}

.footer-section h4 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #cbd5e0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--accent-color);
}

.copyright {
  text-align: center;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
  }
  
  .logo {
    margin-bottom: 1rem;
    justify-content: center;
  }
  
  .search-box {
    width: 100%;
  }
  
  .search-box input {
    width: 100%;
  }
  
  .main-nav {
    overflow-x: auto;
    justify-content: flex-start;
  }
  
  .nav-link {
    white-space: nowrap;
  }
  
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: 2rem;
  }
}
</style>