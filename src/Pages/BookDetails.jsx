import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../Components/CartContext'
import { WishlistContext } from '../Components/WishlistContext'
import { useEffect } from 'react'

export default function BookDetails() {
    const { addToWishlist } = useContext(WishlistContext)
    const { addToCart } = useContext(CartContext)
    const location = useLocation()
    const book = location.state?.book

    if (!book) return <p>No book data provided..</p>
   


    return (
        <>
            <div
                style={{
                    backgroundImage: "url(/images/banner-image-bg-1.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "800px"
                }}
            > 
                <div className="container pt-3 pb-5" >
                    <h3 className='text-center text-underline mt-2 mb-3 '>{book.volumeInfo.title}</h3>
                    <img
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        alt={book.volumeInfo.title}
                        style={{ maxWidth: '200px' }}
                        className='mb-4'
                    />
                    <p className='fs-5'><strong>Authors:</strong> {book.volumeInfo.authors?.join(', ')}</p>
                    <p className='fs-5'><strong>Description:</strong> {book.volumeInfo.description}</p>
                    <p className='fs-5'><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
                    <p className='fs-5'><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
                    <p className='fs-5'><strong>Price: </strong>₹ {book.saleInfo.listPrice?.amount || '450'}</p>
                    <button className='btn me-3 p-3' onClick={()=>addToCart(book)}>Add To Cart</button>
                    <button className='btn p-3' onClick={()=>addToWishlist(book)}>Wishlist</button>
                </div>
            </div>
        </>
    )
}
