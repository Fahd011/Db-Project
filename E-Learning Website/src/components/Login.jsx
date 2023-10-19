import React from "react";
import '../styleSheets/Login.css'

export default function Login(){
    return(
        <div>
            <form action="Login" className="loginForm">
                <h1 className="heading">Login</h1>
                <input type="email" placeholder="Email" className="textbox"/>
                <input type="password" placeholder="Password" className="textbox"/>
                <div className="options">
                    <div className="RememberMe">
                        <input type="checkbox" /><label>Remember me</label>
                    </div>
                    <a href="" text-align="right">Forgot Password?</a>
                </div>
                <button>Login</button>
                <div className="footer">
                    <h3>Don't have an account? <a href="">Register</a></h3>
                </div>
            </form>
        </div>
    )
}