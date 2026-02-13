# 🛍️ Zshop

## 📝 Overview

Zshop is a modern e-commerce application built with React and Vite. It provides a seamless shopping experience with a clean and responsive user interface using Tailwind CSS. The app supports a fully functional shopping cart, product catalog, and checkout flow.

---

## ✨ Key Features

- 📦 Dynamic product catalog (currently hardcoded in context, ready for API integration)  
- 🛒 Interactive shopping cart
  - Add/remove items  
  - Shows quantity and total price  
  - Checkout functionality that stores orders  
- 💻 Fully responsive design  
- 🔍 Product search/filter functionality  
- 🧩 State management using React Context  
- ✅ Prop validation using PropTypes for safer components  

---

## 🚀 Built With

- **React.js** – JavaScript framework for building UI  
- **Vite** – Development server and build tool  
- **Tailwind CSS** – Utility-first CSS framework  
- **Heroicons** – For icons (Plus, Check, Shopping Bag, etc.)  

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Mussie1221/react-cart-project.git

# Navigate to the project folder
cd react-cart-project

# Install dependencies
npm install

# Start development server
npm run dev




## 💻 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm run preview    # Preview production build
```

## 📦 Project Structure
```
react-cart-project/
├── node_modules/
├── public/
│   └── images/                 
├── src/
│   ├── Components/
│   │   ├── Card/                
│   │   ├── CartSummary/         
│   │   ├── Layout/              
│   │   └── (other components)  
│   ├── Context/                 
│   ├── Pages/
│   │   ├── Home/                
│   │   └── (other pages)       
│   ├── utils/
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

```

## 🚧 Project Status
The project is currently under finalized development. Still active to receive pull request :D

## 🎯 Features Deep Dive
- **Responsive Design**: Optimized for all device using Tailwind CSS

- **Shopping Cart**: Add/remove products, track quantity, calculate total, and checkout
- **Prop Validation **: Ensures proper usage of components with PropTypes
- **Product Search**: : Filter products by search term in real-time

## 🔍 Technical Details
- React Context for state management
- Functional components with hooks (useState, useContext, useMemo)
- Tailwind CSS for modern styling
- Modern ES6+ JavaScript
- Heroicons for icons (PlusIcon, CheckIcon, Shopping Bag)
- Optimized image handling from public/images

## ⚡ Performance Optimizations
- Efficient state updates using context
- Images loaded from public folder for faster rendering
- Responsive grid for product listing
- Minimal re-renders with useMemo for filtered products

## 🤝 Contributing
Contributions are welcome. Please follow these steps:
1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
