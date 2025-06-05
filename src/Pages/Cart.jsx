import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate total price safely
  const totalPrice = cartItems.reduce((acc, book) => {
    const price = parseFloat(book?.saleInfo?.listPrice?.amount) || 450;
    return acc + price;
  }, 0);

  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <>
      <hr />
      <h3 className="text-center">Your Cart Items</h3>
      <hr />
      <div className="container">
        <div className="row justify-content-center gap-5">
          {/* Left Side - Cart Items */}
          <div className="col-md-7 col-sm-12">
            {cartItems.length > 0 ? (
              cartItems.map((book) => (
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
                    <button
                      className="btn p-2"
                      onClick={() => {
                        const confirmDelete = window.confirm('Do you want to delete this book from your cart?');
                        if (confirmDelete) {
                          removeFromCart(book.id);
                        }
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Empty Cart</p>
            )}
          </div>

          {/* Right Side - Price Summary */}
          <div className="col-md-4 col-sm-12">
            <div className="border shadow p-3 mt-3 mt-md-0">
              <h5 className="text-center mb-3 fs-3 fw-bold">Order Summary</h5>
              <p className='fs-5'><strong>Total Items:</strong> {cartItems.length}</p>
              <p className='fs-5'><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>
              <p className='fs-5'><strong>Discount (10%):</strong> -₹{discount.toFixed(2)}</p>
              <hr />
              <p className='fs-5'><strong>Final Price:</strong> ₹ {finalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}


