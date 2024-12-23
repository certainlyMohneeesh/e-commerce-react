# CythDeal E-commerce Platform

A modern, full-stack e-commerce platform built with React, Node.js, and MongoDB. Features a sleek UI with Tailwind CSS and robust state management.

## Features

- 🛍️ Product browsing and searching
- 🛒 Cart management
- 👤 User authentication
- 💳 Secure checkout process
- 📱 Responsive design
- 🎨 Modern UI with animations
- 🔐 Admin dashboard
- 🏪 Seller portal

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Framer Motion
- React Router
- Axios
- Lucide Icons

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Express Session
- Bcrypt

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce-react.git
```
# Frontend
```bash
cd frontend
npm install
```
# Backend
```bash
cd backend
npm install
```
# Backend .env
```bash
MONGO_URI=your_mongodb_uri
PORT=5000
```
# Frontend
```bash
npm run dev
```

# Backend
```bash
npm run dev
```
# Project Structure
```bash
e-commerce-project/
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       │   ├── auth.js
│       │   ├── products.js
│       │   ├── cart.js
│       │   ├── complaints.js
│       │   ├── coupons.js
│       │   └── config.js
│       ├── components/
│       │   ├── common/
│       │   │   ├── Navbar.jsx
│       │   │   ├── Footer.jsx
│       │   │   ├── LoadingSpinner.jsx
│       │   │   └── ErrorBoundary.jsx
│       │   ├── auth/
│       │   │   ├── LoginForm.jsx
│       │   │   └── SignupForm.jsx
│       │   ├── products/
│       │   │   ├── ProductCard.jsx
│       │   │   ├── ProductGrid.jsx
│       │   │   └── ProductDetail.jsx
│       │   ├── cart/
│       │   │   ├── CartItem.jsx
│       │   │   └── CartSummary.jsx
│       │   ├── user/
│       │   │   ├── UserProfile.jsx
│       │   │   └── OrderHistory.jsx
│       │   ├── seller/
│       │   │   ├── SellerDashboard.jsx
│       │   │   └── ProductManagement.jsx
│       │   └── admin/
│       │       ├── AdminDashboard.jsx
│       │       └── ComplaintManagement.jsx
│       ├── contexts/
│       │   ├── AuthContext.jsx
│       │   └── CartContext.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Products.jsx
│       │   ├── ProductDetail.jsx
│       │   ├── Cart.jsx
│       │   ├── Checkout.jsx
│       │   ├── UserDashboard.jsx
│       │   ├── SellerDashboard.jsx
│       │   └── AdminDashboard.jsx
│       ├── utils/
│       │   ├── axios.js
│       │   ├── validation.js
│       │   └── helpers.js
│       ├── styles/
│       │   └── tailwind.css
│       ├── App.jsx
│       └── index.jsx
├── backend/
│   ├── models/
│   │   └── [your existing models]
│   ├── routes/
│   │   └── [your existing routes]
│   ├── config/
│   │   ├── db.js
│   │   └── constants.js
│   └── server.js
└── package.json
```
# Key Features
## User Management: Registration, login, profile management
## Product Catalog: Browse products by category, search functionality
## Shopping Cart: Add/remove items, update quantities
## Admin Panel: Manage products, users, and orders
## Seller Dashboard: Track sales, manage inventory
## Responsive Design: Optimized for all device sizes

# Contributing
Contributions are welcome! Please open an issue or submit a pull request.