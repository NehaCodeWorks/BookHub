import Navbar from "./Components/Navbar";
import './App.css'
import './style.css'
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import BookDetails from './Pages/BookDetails'
import { useState } from "react";
import SearchBooks from "./Pages/SearchBooks";
import GenrePage from "./Pages/GenrePage";
import Cart from "./Pages/Cart"
import Wishlist from "./Pages/Wishlist";

function App() {
const [query, setQuery] = useState('');

  return (
    <>
      <Navbar query={query} setQuery={setQuery}  />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/genre/:genreName" element={<GenrePage />} />
        <Route path="/bookDetails/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
