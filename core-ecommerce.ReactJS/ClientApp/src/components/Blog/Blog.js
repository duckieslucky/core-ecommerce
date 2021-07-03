import React from 'react';
import img from '../ImgConfig/Blog'

export default function Blog() {
    return (
        <div className="blog-area pb-70">
            <div className="container">
                <div className="section-title-2 st-border-center text-center mb-75" data-aos="fade-up" data-aos-delay="200">
                    <h2>Latest News</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                            <div className="blog-img-date-wrap mb-25">
                                <div className="blog-img">
                                    <a href="blog-details.html"><img src={img.img_blog_1} alt=""/></a>
                                </div>
                                <div className="blog-date">
                                    <h5>05
                                        <span>May</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Furniture</a>,</li>
                                        <li>By:<a href="#">
                                                Admin</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">Lorem ipsum dolor consectet adipisicing elit</a>
                                </h3>
                                <div className="blog-btn">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrap mb-30" data-aos="fade-up" data-aos-delay="400">
                            <div className="blog-img-date-wrap mb-25">
                                <div className="blog-img">
                                    <a href="blog-details.html"><img src={img.img_blog_2} alt=""/></a>
                                </div>
                                <div className="blog-date">
                                    <h5>06
                                        <span>May</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Furniture</a>,</li>
                                        <li>By:<a href="#">
                                                Admin</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">Morbi dignissim sit amet velit id vestibulum.</a>
                                </h3>
                                <div className="blog-btn">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrap mb-30" data-aos="fade-up" data-aos-delay="600">
                            <div className="blog-img-date-wrap mb-25">
                                <div className="blog-img">
                                    <a href="blog-details.html"><img src={img.img_blog_3} alt=""/></a>
                                </div>
                                <div className="blog-date">
                                    <h5>07
                                        <span>May</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li>
                                            <a href="#">Furniture</a>,</li>
                                        <li>By:<a href="#">
                                                Admin</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">Fusce euismod varius tellus, nec molestie turpis.</a>
                                </h3>
                                <div className="blog-btn">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
