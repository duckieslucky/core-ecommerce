import React from 'react'
import img from '../ImgConfig/Service_area'

export default function Service_area() {
    return (
        <div class="service-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div class="service-wrap" data-aos="fade-up" data-aos-delay="200">
                            <div class="service-img">
                                <img src={img.img_car} alt=""/>
                            </div>
                            <div class="service-content">
                                <h3>Free Shipping</h3>
                                <p>Free shipping on all order</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div class="service-wrap" data-aos="fade-up" data-aos-delay="400">
                            <div class="service-img">
                                <img src={img.img_time} alt=""/>
                            </div>
                            <div class="service-content">
                                <h3>Support 24/7</h3>
                                <p>Support 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div class="service-wrap" data-aos="fade-up" data-aos-delay="600">
                            <div class="service-img">
                                <img src={img.img_dollar} alt=""/>
                            </div>
                            <div class="service-content">
                                <h3>Money Return</h3>
                                <p>Back Guarantee Under
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
                        <div class="service-wrap" data-aos="fade-up" data-aos-delay="800">
                            <div class="service-img">
                                <img src={img.img_discount} alt=""/>
                            </div>
                            <div class="service-content">
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
