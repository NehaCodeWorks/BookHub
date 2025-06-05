import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    //get cart from localstorage
    const storedCart = localStorage.getItem('cartItems')
    const [cartItems, setCartItems] = useState(
        storedCart ? JSON.parse(storedCart) : []
    )

    //save to localstorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    /*   const addToCart = (newItem) => {
          setCartItems(prev => [...prev, newItem]);
  
      } */
    const addToCart = (newItem) => {
        const existingItem = cartItems.find((item) => item.id === newItem.id);

        if (existingItem) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
            alert("Quantity increased for this book!");
        } else {
            setCartItems((prevItems) => [
                ...prevItems,
                { ...newItem, quantity: 1 }, 
            ]);
            alert("Book added to cart!");
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
    }
    return (
        <>
            <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}
