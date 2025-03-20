# 📚 Library Vue Project

This is a **Vue.js-based library management system** designed to handle book records, user management, and borrowing history in an intuitive web interface.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Overview

**LibraryVueProject** is a **single-page application (SPA)** built with **Vue.js**.

## Technologies

- **Vue.js** – Frontend framework  
- **Vue Router** – For client-side navigation  
- **Node.js & Express (optional)** – Backend integration 

## Prerequisites

- **Node.js** (v16 or later) – Install from [Node.js official site](https://nodejs.org/)  
- **Vue CLI** – Install globally via:  
  ```bash
  npm install -g @vue/cli
  ```

## Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:FilipeanSilva/LibraryVueProject.git
   cd LibraryVueProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run start
   ```

4. **Open the application**
   Navigate to `http://localhost:5173/` (or the port displayed in your terminal).


## Project Structure

```
LibraryVueProject/
│
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, styles
│   ├── components/       # Reusable Vue components
│   ├── views/            # Page views (Home, Dashboard, Books, Users)
│   ├── router/           # Vue Router configuration
│   ├── store/            # Vuex / Pinia state management
│   ├── App.vue           # Root component
│   ├── main.js           # Entry point
│
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

## Contact

- **Author**: Filipe Silva  
- **GitHub**: [FilipeanSilva](https://github.com/FilipeanSilva)  
