Components & Context Overview

This section explains the structure and purpose of key frontend components and global state management in the project.

Components

Hero.jsx
Displays the main banner/hero section of the homepage. Typically includes promotional content, images, or call-to-action buttons.

Navbar.jsx
Main navigation bar for the application. Handles routing between pages and includes links like Home, Products, Cart, etc.

NavbarCategories.jsx
Renders product categories inside the navbar for easier navigation and filtering.

NewArrivals.jsx
Displays the latest products added to the store. Helps highlight fresh inventory to users.

ProductItems.jsx
Reusable component to display individual product details such as image, name, price, and actions (e.g., add to cart).

Context API (State Management)

ShopContext.js
Defines the global context used across the app. Stores shared data like products, cart items, and user interactions.

ShopContextProvider.jsx
Wraps the application and provides global state using React Context API. All components can access shared data from here.

How It Works

The app uses React Context API for state management.

ShopContextProvider wraps the root component (usually in App.jsx).

Components like ProductItems, Navbar, etc., consume this global state.

This avoids prop drilling and keeps the app scalable.
