import React from 'react'
import img_banner_4 from '../images/banner/banner-4.png'
import img_banner_5 from '../images/banner/banner-5.png'
import img_sale from '../images/icon-img/sale.png'
export default function Banner_1() {
    return (
        <div className="banner-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                            <a href="product-details.html">
                                <img src={img_banner_4} alt=""/></a>
                            <div className="banner-content-2">
                                <span>Sale 30%</span>
                                <h2>New Furniture</h2>
                                <p>Lorem ipsum dolor sit amet consecte adipisicing elit sed do</p>
                                <div className="btn-style-2 btn-hover">
                                    <a href="product-details.html" className="btn">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="400">
                            <a href="product-details.html">
                                <img src={img_banner_5} alt=""/></a>
                            <div className="banner-content-3">
                                <h3>Up To 30%
                                    <img src={img_sale} alt=""/>
                                    Every Item</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
