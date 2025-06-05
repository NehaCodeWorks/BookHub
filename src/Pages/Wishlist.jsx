import React, { useContext } from 'react'
import { WishlistContext } from '../Components/WishlistContext';
import { CartContext } from '../Components/CartContext';

export default function Wishlist() {
  const { wishlistItems,deleteFromWishlist} = useContext(WishlistContext)
  const { addToCart } = useContext(CartContext)
  return (
    <>
      <hr />
      <h3 className='text-center '>Your WishList Books</h3>
      <hr />
      <div className="container">
        <div className="row justify-content-center gap-5">
       
          <div className="col-md-7 col-sm-12">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((book) => (
                <div
                  key={book.id}
                  className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-start border shadow p-3 mb-3"
                  style={{ maxWidth: "100%" }}
                >
                  {/* Book Image */}
                  <img
                    src={book?.volumeInfo?.imageLinks?.smallThumbnail || 'https://via.placeholder.com/150'}
                    alt={book?.volumeInfo?.title || 'Book cover'}
                    style={{ width: "150px", height: "200px", objectFit: "contain" }}
                    className="me-3"
                  />

                  {/* Book Details */}
                  <div className="flex-grow-1">
                    <p className='fs-5'><strong>Title:</strong> {book?.volumeInfo?.title || 'No Title Available'}</p>
                    <p className='fs-5'><strong>Author:</strong> {book?.volumeInfo?.authors?.join(', ') || 'Unknown'}</p>
                    <p className='fs-5'><strong>Price: </strong>₹ {book.saleInfo.listPrice?.amount || '450'}</p>
                    <button className="btn p-2"
                      onClick={() => {
                        const confirmDelete = window.confirm('Do you want to delete this book from your cart?');
                        if (confirmDelete) {
                          deleteFromWishlist(book.id);
                        }
                      }} >
                      Remove
                    </button>
                    <button className='btn p-2 ms-3' onClick={()=>addToCart(book)}>Add To Cart</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Empty Cart</p>
            )}
          </div>

         
        </div>
      </div>
    </>
  )
}
