import React from 'react';

import "./User.css";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

export default function Register(){
    return(
        <div className='user-container'>
            <div className='user-wrapper'>
                <h1 className='wrapper-title'>CREATE AN ACCOUNT</h1>
                <form className='user-form' action="">
                    <input className='user-input' type="text" placeholder='Name'/>
                    <input className='user-input' type="text" placeholder='Last name'/>
                    <input className='user-input' type="text" placeholder='User name'/>
                    <input className='user-input' type="email" placeholder='Email'/>
                    <input className='user-input' type="password" placeholder='Password'/>
                    <input className='user-input' type="text" placeholder='Confirm password'/>
                    <span className='agreement'>
                        By creating an account, I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong>
                    </span>
                    <button className='user-button'>CREATE</button>
                </form>
            </div>
        </div>
    )
}