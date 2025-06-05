import React from 'react'
import { useLocation } from 'react-router-dom'
import BookList from '../Components/BookList'

export default function SearchBooks() {
    const location = useLocation()

    const query = new URLSearchParams(location.search).get('q')

    return (
        <>
            <div
                style={{
                    backgroundImage: "url(/images/banner-image-bg-2.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "700px"
                }}
            >

                <h3 className='text-center mb-5 pt-4 text-decoration-underline'>Your Search Results</h3>
                <BookList query={query} />
            </div>

        </>
    )
}
