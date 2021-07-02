import React from 'react';
import img_cart_1 from '../images/cart/cart-1.jpg'
import img_cart_2 from '../images/cart/cart-2.jpg'

export default function Cart() {
    return (
        <div className="sidebar-cart-active">
            <div className="sidebar-cart-all">
                <a className="cart-close" href="#">
                    <i className="pe-7s-close"></i>
                </a>
                <div className="cart-content">
                    <h3>Shopping Cart</h3>
                    <ul>
                        <li>
                            <div className="cart-img">
                                <a href="#">
                                    <img src={img_cart_1} alt=""/></a>
                            </div>
                            <div className="cart-title">
                                <h4>
                                    <a href="#"></a>
                                </h4>
                                <span>
                                    1 × $49.00
                                </span>
                            </div>
                            <div className="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                        <li>
                            <div className="cart-img">
                                <a href="#">
                                    <img src={img_cart_2} alt=""/></a>
                            </div>
                            <div className="cart-title">
                                <h4>
                                    <a href="#">Modern Chairs</a>
                                </h4>
                                <span>
                                    1 × $49.00
                                </span>
                            </div>
                            <div className="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                    </ul>
                    <div className="cart-total">
                        <h4>
                            Subtotal
                            <span>00000</span>
                        </h4>
                    </div>
                    <div className="cart-btn btn-hover">
                        <a className="theme-color" href="cart.html">view cart</a>
                    </div>
                    <div className="checkout-btn btn-hover">
                        <a className="theme-color" href="checkout.html">checkout</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
