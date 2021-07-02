import React from 'react'
import Login from '../../../Login/Login'
import Register from '../../../Register/Register'

export default function Login_register_page() {
    return (
        <div className="login-register-area pb-100 pt-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">
                                <a className="active" data-bs-toggle="tab" href="#lg1">
                                    <h4>
                                        login
                                    </h4>
                                </a>
                                <a data-bs-toggle="tab" href="#lg2">
                                    <h4>
                                        register
                                    </h4>
                                </a>
                            </div>
                            <div className="tab-content">
                                {/* login */}
                                <Login/> 
                                {/* register */}
                                <Register/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
