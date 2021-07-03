import React from 'react'
import img from '../ImgConfig/Service_area'

export default function Service_area() {
    return (
        <div className="service-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div className="service-wrap" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-img">
                                <img src={img.img_car} alt=""/>
                            </div>
                            <div className="service-content">
                                <h3>Free Shipping</h3>
                                <p>Free shipping on all order</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div className="service-wrap" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-img">
                                <img src={img.img_time} alt=""/>
                            </div>
                            <div className="service-content">
                                <h3>Support 24/7</h3>
                                <p>Support 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div className="service-wrap" data-aos="fade-up" data-aos-delay="600">
                            <div className="service-img">
                                <img src={img.img_dollar} alt=""/>
                            </div>
                            <div className="service-content">
                                <h3>Money Return</h3>
                                <p>Back Guarantee Under
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div className="service-wrap" data-aos="fade-up" data-aos-delay="800">
                            <div className="service-img">
                                <img src={img.img_discount} alt=""/>
                            </div>
                            <div className="service-content">
                                <h3>Order Discount</h3>
                                <p>Onevery order over $150</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
