import React from 'react'
import img from '../ImgConfig/Banner'

export default function Banner_1() {
    return (
        <div className="banner-area pb-95" data-aos="fade-up" data-aos-delay="200">
            <div className="container">
                <div className="bg-img bg-padding-1" style={{backgroundImage: img.bg_1}}>
                    <div className="banner-content-4">
                        <h2>New Dining
                            <br/>Chair Set</h2>
                        <h3>Up To 30% Off</h3>
                        <div className="btn-style-2 btn-hover">
                            <a href="product-details.html" className="btn">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
