import React from 'react'
import { useParams } from 'react-router-dom'
import BookList from '../Components/BookList'

export default function GenrePage() {
    const { genreName } = useParams()
    return (
        <>
            <div
                style={{
                    backgroundImage: "url(/images/banner-image-bg-2.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "100vh"
                }}>
                <h3 className='text-center pt-4 mb-4'>Your {genreName} Books</h3>
                <BookList genreName={genreName}/>
            </div>
        </>
    )
}
