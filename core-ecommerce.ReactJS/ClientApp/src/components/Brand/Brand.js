import React from 'react'
import img from '../ImgConfig/Brand'

export default function Brand() {
    return (
        <div className="brand-logo-area pb-95">
            <div className="container">
                <div className="brand-logo-active swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="200">
                                <a href="#"><img src={img.img_brand_logo_1} alt=""/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="400">
                                <a href="#"><img src={img.img_brand_logo_2} alt=""/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="600">
                                <a href="#"><img src={img.img_brand_logo_3} alt=""/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="800">
                                <a href="#"><img src={img.img_brand_logo_4} alt=""/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="1000">
                                <a href="#"><img src={img.img_brand_logo_5} alt=""/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="1200">
                                <a href="#"><img src={img.img_brand_logo_5} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
