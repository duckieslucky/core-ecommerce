import React from 'react'

export default function Register() {
    return (
        <div id="lg2" className="tab-pane">
            <div className="login-form-container">
                <div className="login-register-form">
                    <form action="#" method="post">
                        <input type="text" name="surname" placeholder="Surname"/>
                        <input type="text" name="Name" placeholder="Name"/>
                        <input type="text" name="user-name" placeholder="Username"/>
                        <input type="password" name="user-password" placeholder="Password"/>
                        <input name="user-email" placeholder="Email" type="email"/>
                        <input type="text" name="number" placeholder="Phone" maxLength={11}/>
                        <div className="button-box btn-hover">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
