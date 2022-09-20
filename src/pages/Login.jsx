import React from "react";

import "./User.css";

export default function Login(){
    return(
        <div className='user-container'>
            <div className='login-wrapper'>
                <h1 className='wrapper-title'>SIGN IN</h1>
                <form className='login-form' action="">
                    <input className='login-input' type="email" placeholder='Email'/>
                    <input className='login-input' type="password" placeholder='Password'/>
                    <button className='user-button'>LOGIN</button>
                    <a className="link" href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <a className="link" href="">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
}