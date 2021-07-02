import React from 'react'
import {Link} from 'react-router-dom'

export default function Breadcrum_page() {
    return (
        <div className="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <h2>Login - Register
                    </h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <i className="ti-angle-right"></i>
                        </li>
                        <li>
                            Login - Register
                        </li>
                    </ul>
                </div>
            </div>
            <div className="breadcrumb-img-1">
                <img src="assets/images/banner/breadcrumb-1.png" alt=""/>
            </div>
            <div className="breadcrumb-img-2">
                <img src="assets/images/banner/breadcrumb-2.png" alt=""/>
            </div>
        </div>
    )
}
