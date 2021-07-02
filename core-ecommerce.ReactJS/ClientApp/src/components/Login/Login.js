import React from 'react'

export default function Login() {
    return (
        <div id="lg1" className="tab-pane active">
            <div className="login-form-container">
                <div className="login-register-form">
                    <form action="#" method="post">
                        <input type="text" name="user-name" placeholder="Username"/>
                        <input type="password" name="user-password" placeholder="Password"/>
                        <div className="login-toggle-btn">
                            <input type="checkbox"/>
                            <label>Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className="button-box btn-hover">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
