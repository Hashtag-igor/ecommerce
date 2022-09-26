import React from "react";
import { Link } from "react-router-dom"

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
                    <Link to="/register" style={{textDecoration: "none"}}><span className="link">CREATE A NEW ACCOUNT</span></Link>
                </form>
            </div>
        </div>
    )
}