import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

export default function Home() {
    return (
        <>

            <section id="billboard" className="position-relative d-flex align-items-center py-5 bg-light-gray"
                style={{
                    backgroundImage: "url(/images/banner-image-bg.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "800px"
                }}


            >
              
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={1}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    
                <SwiperSlide>
                    <div className="container">
                        <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                            <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                                <div className="banner-content">
                                    <h2>The Fine Print Book Collection</h2>
                                    <p>Best Offer Save 30%. Grab it now!</p>
                                    <a href="#" className="btn mt-3">Shop Collection</a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="image-holder">
                                    <img src="/Img/attitude.jpg" className="img-fluid border rounded shadow-sm " alt="banner"
                                        style={{ height: '550px', width: '350px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                            <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                                <div className="banner-content">
                                    <h2>The Fine Print Book Collection</h2>
                                    <p>Best Offer Save 30%. Grab it now!</p>
                                    <a href="#" className="btn mt-3">Shop Collection</a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="image-holder">
                                    <img src="/Img/harry.jpg" className="img-fluid border rounded shadow-sm " alt="banner"
                                        style={{ height: '550px', width: '350px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                            <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                                <div className="banner-content">
                                    <h2>The Fine Print Book Collection</h2>
                                    <p>Best Offer Save 30%. Grab it now!</p>
                                    <a href="#" className="btn mt-3">Shop Collection</a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="image-holder">
                                    <img src="/Img/powersubconsious.jpg" className="img-fluid border rounded shadow-sm " alt="banner"
                                        style={{ height: '550px', width: '350px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                </Swiper>
       </section>
 
        </>
    )
}
