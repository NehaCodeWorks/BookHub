import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
export default function BookList({ query, genreName}) {
    const navigate = useNavigate()

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchBooks = async () => {
        setLoading(true)
        try {
            const url = `https://www.googleapis.com/books/v1/volumes?q=${query ? query : genreName}&key=AIzaSyAecuQmMyxROdilBJViVLru_qUZmtvgt5U`
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                // console.log(data.items)
                setBooks(data.items)
            } else {
                console.log('Error Fetching Error...')
            }
        } catch (error) {
            console.log('API fetching error..', error)
        }
        setLoading(false)
    }

    useEffect(() => {
        const safeQuery = query?.trim() || genreName?.trim();
        if (!safeQuery){
            setBooks([])
            return;
        }
        fetchBooks()
    }, [query, genreName]);

    const handleView = (book) => {
        navigate(`/bookDetails/${book.id}`, { state: { book } })
    }
    return (
        <>
            {loading ? (

                <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                    <PuffLoader color="#4fb5e0" size={80} />
                </div>
            ) : (
                books.length > 0 ? (
                    <div className="container">
                        <div className="row ">
                            {books.map((book) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 " id="book-container" key={book.id}>
                                    <div className="card h-100 d-flex flex-column justify-content-between border shadow-sm "   style={{ width: '100%' }}>
                                        <img
                                            src={book.volumeInfo.imageLinks?.smallThumbnail || '/img/no-img.jpg'}
                                            className="card-img-top mx-auto "
                                            alt={book.volumeInfo.title || 'Book cover'}
                                            style={{ height: "200px", objectFit: "contain" }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h6 className="card-title fs-5">{book.volumeInfo.title || "No Title"}</h6>
                                            <p className='fs-5'><strong>Author: </strong>{book.volumeInfo.authors?.join(', ') || "Unknown"}</p>

                                            <p className='fs-5'><strong>Price: </strong>₹ {book.saleInfo.listPrice?.amount || '450'}</p>
                                            <button className="btn mt-auto" onClick={() => handleView(book)}>View</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className='text-center fs-4'>No books found.</p>
                )
            )}
        </>
    )
}
