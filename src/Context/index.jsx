import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Cart state
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);

  // Hardcoded products with public images
  const items = useMemo(
    () => [
      { id: 1, title: "Red T-Shirt", price: 20, category: { name: "Clothes" }, images: ["/images/t-shirt.png"] },
      { id: 2, title: "Blue Sneakers", price: 50, category: { name: "Shoes" }, images: ["/images/sneakers.png"] },
      { id: 3, title: "Smartphone", price: 300, category: { name: "Electronics" }, images: ["/images/phone.png"] },
      { id: 4, title: "Wooden Chair", price: 80, category: { name: "Furnitures" }, images: ["/images/chair.png"] }
    ],
    []
  );

  // Cart methods
  const addToCart = (product) => {
    if (!cartProducts.some((item) => item.id === product.id)) {
      setCartProducts((prev) => [...prev, { ...product, quantity: 1 }]);
      setCount((prev) => prev + 1);
    }
  };

  const removeFromCart = (id) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
    setCount((prev) => prev - 1);
  };

  // ✅ Clear cart helper
  const clearCart = () => {
    setCartProducts([]);
    setCount(0);
  };

  // Context value
  const contextValue = {
    count,
    cartProducts,
    addToCart,
    removeFromCart,
    clearCart,   // exposed here for CartSummary
    order,
    setOrder,
    items
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Prop validation
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired
};