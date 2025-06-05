import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const storedWishlist = localStorage.getItem('wishlistItems');
  const [wishlistItems, setWishlistItems] = useState(
    storedWishlist ? JSON.parse(storedWishlist) : []
  );

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item) => {
    const isAlreadyInWishlist = wishlistItems.some(
      (book) => book.id === item.id
    );

    if (isAlreadyInWishlist) {
      alert("You already have this book in your wishlist!");
    } else {
      setWishlistItems((prevItems) => [item, ...prevItems]);
      alert("Book added to your wishlist!");
    }
  };

  const deleteFromWishlist = (itemId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((book) => book.id !== itemId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, deleteFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
