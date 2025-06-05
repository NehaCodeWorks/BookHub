import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import { WishlistContext } from './WishlistContext'

export default function Navbar({ query, setQuery }) {

    const navRef = useRef();
    const { cartItems } = useContext(CartContext)
    const { wishlistItems } = useContext(WishlistContext)

    const [suggestions, setSuggestions] = useState([])
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
   

    const handleSearch = (e) => {

        e.preventDefault()
        if (query.trim()) {
            navigate(`/search?q=${query}`)
            setQuery('')
            closeMenu()
        }
    }

    const fetchSuggestions = async () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAecuQmMyxROdilBJViVLru_qUZmtvgt5U`
        try {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                setSuggestions(data.items.slice(0, 6))
            } else {
                console.log('response is not ok')
            }
        } catch (error) {
            console.log('Error fetching data..', error)
        }
    }

    const handleSuggestionClick = (book) => {
        const title = book.volumeInfo.title || '';
        navigate(`/search?q=${title}`)
        setQuery('');
        setSuggestions([]);
        setShow(false);
        closeMenu()
    };

    const closeMenu = () => {
        if (navRef.current?.classList.contains("show")) {
            // Collapse the menu using Bootstrap's class
            navRef.current.classList.remove("show");
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.trim()) {
                fetchSuggestions()
            } else {
                setSuggestions([])
            }
        }, 300)

        return () => clearTimeout(timer)
    }, [query])
    return (
        <>
            <header id="header" className="site-header">

                <div className="top-info border-bottom d-none d-md-block ">
                    <div className="container-fluid">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <p className="fs-6 my-2 text-center">Need any help? Call us <a href="#">112233344455</a></p>
                            </div>
                            <div className="col-md-4 border-start border-end">
                                <p className="fs-6 my-2 text-center">Summer sale discount off 60% off! <a className="text-decoration-underline"
                                    href="#">Shop Now</a></p>
                            </div>
                            <div className="col-md-4">
                                <p className="fs-6 my-2 text-center">2-3 business days delivery & free returns</p>
                            </div>
                        </div>
                    </div>
                </div>

                <nav id="header-nav" className="navbar navbar-expand-lg py-3 sticky-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="/images/main-logo.png" className="logo" />
                        </a>
                        <button className="navbar-toggler d-flex d-lg-none order-3 p-2 ms-3" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars fs-1"></i>
                        </button>
                        <div className="offcanvas offcanvas-end mx-auto " ref={navRef}  tabIndex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                            <div className="offcanvas-header px-4 pb-0">
                                <a className="navbar-brand" href="index.html">
                                    <img src="images/main-logo.png" className="logo" />
                                </a>
                                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"
                                    data-bs-target="#bdNavbar"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul id="navbar"
                                    className="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1">
                                    <li className="nav-item">
                                        <NavLink className="nav-link me-4 active" to="/" onClick={closeMenu}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link me-4" to="/about" onClick={closeMenu}>About</NavLink>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link me-4 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                            aria-expanded="false">Genre</a>
                                        <ul className="dropdown-menu animate slide border">
                                            <li> <NavLink to="/genre/Fiction" className="dropdown-item fw-light" onClick={closeMenu}>Fiction</NavLink></li>
                                            <li> <NavLink to="/genre/Non Fiction" className="dropdown-item fw-light" onClick={closeMenu}>Non Fiction</NavLink></li>
                                            <li> <NavLink to="/genre/Self Help" className="dropdown-item fw-light" onClick={closeMenu}>Self Help</NavLink></li>
                                            <li> <NavLink to="/genre/Fantasy" className="dropdown-item fw-light" onClick={closeMenu}>Fantasy</NavLink></li>
                                            <li> <NavLink to="/genre/Adventure" className="dropdown-item fw-light" onClick={closeMenu}>Adventure</NavLink></li>
                                            <li> <NavLink to="/genre/Biography" className="dropdown-item fw-light" onClick={closeMenu}>Biography</NavLink></li>
                                            <li> <NavLink to="/genre/Mystery" className="dropdown-item fw-light" onClick={closeMenu}>Mystery</NavLink></li>
                                        </ul>
                                    </li>

                                </ul>
                                <div className="user-items d-flex ">
                                    <ul className="d-flex justify-content-end list-unstyled mb-0">
                                        <li className='pe-3'>
                                            {/* searchBar */}
                                            <form className="d-flex" role="search" style={{ position: 'relative' }} onSubmit={handleSearch}>
                                                <input type="text" placeholder='Search' className='ps-2'
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    style={{
                                                        border: 'none',
                                                        outline: 'none',
                                                        border: '2pxpe-3 solid grey',
                                                        borderRadius: '10px',

                                                    }}
                                                    onFocus={() => setShow(true)}
                                                    onBlur={() => setTimeout(() => setShow(false), 200)}
                                                    
                                                />

                                                {/* suggestions */}
                                                <div className='suggestion-container'>
                                                    {show &&
                                                        suggestions &&
                                                        suggestions.map((book) => (
                                                            <span className='autosuggestion'
                                                                key={book.id}
                                                                onClick={() => {
                                                                    handleSuggestionClick(book)
                                                                }}
                                                                onKeyDown={(e) => {
                                                                    if (e.key === 'Enter') {
                                                                        handleSuggestionClick(book);
                                                                    }
                                                                }}
                                                                
                                                            >{book.volumeInfo.title || ''}</span>
                                                        ))
                                                    }
                                                </div>
                                                <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', top: '25%', right: '10px', cursor: 'pointer' }}
                                                    onClick={handleSearch}
                                                ></i>
                                            </form>

                                        </li>

                                        <li className='pe-3'>
                                            <NavLink to='/cart'><i className="fas fa-shopping-cart">{cartItems.length}</i></NavLink>
                                        </li>
                                        <li className='pe-3'>
                                            <NavLink to='/wishlist'><i className="fas fa-heart">{wishlistItems.length}</i></NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}
