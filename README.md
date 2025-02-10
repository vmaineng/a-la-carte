# Remix Shopping Cart MVP

This project is a **timed weekend MVP** focusing on building a basic shopping cart system using **Remix** and **React Context** for state management.

## 🚀 Features Implemented

### **1️⃣ Products Page**
- Displays a list of available products.
- Allows users to add items to the cart.
- Updates the total price dynamically.

### **2️⃣ Cart Page**
- Displays items that have been added to the cart.
- Allows users to remove items from the cart.
- Updates the total price upon item removal.

## 📌 **Key Learnings**
- **Cart Context (`CartContext`)**: Used React Context to manage global cart state.
- **Persistent State with `localStorage`**: Ensured the cart remains intact after a page refresh.
- **Remix Loaders (`loader`)**: Fetched product data using Remix’s built-in loader functions.
- **State Management in Remix**: Learned how to share and update state across multiple routes.

## 🛠️ **Tech Stack**
- **Remix** – Full-stack React framework for server-side rendering and routing.
- **React Context API** – For global state management.
- **Tailwind CSS** – For styling the UI.
- **localStorage** – To persist cart data between refreshes.

## 🏗️ **How to Run the Project**
1. Clone the repository:
   ```sh
   git clone <repo_url>
   cd remix-shopping-cart-mvp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open **http://localhost:5173** in your browser.

## 🔥 **Future Enhancements**
- Add authentication for user-specific carts.
- Implement a checkout process.
- Enhance the UI with better styling and animations.

This was a fun and insightful weekend challenge! 🚀

