import React from 'react'

export default function About() {
  return (
    <>
      <div style={{
        backgroundImage: "url(/images/banner-image-bg-2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "700px"
      }}>

        <h3 className='ms-3 text-center pt-3 text-decoration-underline'>About Us</h3>

        <div className="row mt-5 mx-5">
          <div className='col-md-6'>
            <p className='fs-5 mt-3' >A passionate Full Stack Web Developer. Eager to contribute to a dynamic organization where I can
              apply my technical skills, collaborate with experienced professionals, and grow as a software
              developer.
              Passionate about learning and building real-world applications with a focus on clean, efficient
              code.</p>
          </div>
          <div className='col-md-6'>
            <img src="/img/library.jpg" alt=""
              className='img-fluid border shadow-sm rounded'
              style={{ height: '500px', width: '90%' }}
            />
          </div>
        </div>
      </div>

    </>
  )
}
