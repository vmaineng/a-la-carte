// context/CartContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the types for CartItem and CartContext
interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

// Create a context with default values (can be null initially)
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component to wrap the app and provide cart data
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState([]);
  {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Add an item to the cart (no quantity management, just add if not exists)
    const addToCart = (item: CartItem) => {
      setCart((prevCart) => {
        // Check if the item is already in the cart
        const itemExists = prevCart.some((cartItem) => cartItem.id === item.id);
        if (itemExists) {
          return prevCart; // Don't add duplicate items
        }
        return [...prevCart, item]; // Add item if not already in cart
      });
    };

    // Remove an item from the cart
    const removeFromCart = (itemId: number) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    // Clear all items from the cart
    const clearCart = () => {
      setCart([]);
    };

    return (
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}

// Custom hook to use cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
