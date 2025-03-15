# 📚 Library Vue Project

This is a **Vue.js-based library management system** designed to handle book records, user management, and borrowing history in an intuitive web interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

**LibraryVueProject** is a **single-page application (SPA)** built with **Vue.js** that allows users to **browse, add, edit, and manage library books**. It can be extended with backend integrations for persistent data storage.

## Features

✔️ **Book Management** – View details and delete books in the library.   

## Technologies

- **Vue.js** – Frontend framework  
- **Vue Router** – For client-side navigation  
- **Vuex / Pinia** – State management (depending on implementation)  
- **Tailwind CSS** – Styling  
- **Axios** – HTTP requests (if connecting to an API)  
- **Node.js & Express (optional)** – Backend integration (if applicable)  
- **MongoDB / Firebase / PostgreSQL (optional)** – For storing book and user data  

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

## Usage

- **Adding Books**: Use the dashboard to enter book details.  
- **Editing Books**: Modify book information via the admin panel.  
- **Borrowing Books**: Assign books to users and track due dates.  
- **Returning Books**: Mark books as returned and update availability status.  

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

## License

📜 **MIT License** – Free to use and modify.

## Contact

- **Author**: Filipe Silva  
- **GitHub**: [FilipeanSilva](https://github.com/FilipeanSilva)  
