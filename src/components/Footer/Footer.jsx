import React from "react";
import { Link } from "react-router-dom"

import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-left">
                <Link to="/" style={{textDecoration: "none"}}><h1 className="footer-logo">LAMA.</h1></Link>
                <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nobis facere, beatae explicabo quod iste veritatis odit deleniti enim soluta? Aliquid explicabo libero consequatur quia aspernatur ratione deserunt odio voluptatem.</p>
                <div className="footer-social-container">
                    <div className="footer-social-icon">
                        <FacebookIcon className="icon" style={{backgroundColor: "3B5999"}}/>
                    </div>
                    <div className="footer-social-icon">
                        <InstagramIcon className="icon" style={{backgroundColor: "E4405F"}}/>
                    </div>
                    <div className="footer-social-icon">
                        <TwitterIcon className="icon" style={{backgroundColor: "55ACEE"}}/>
                    </div>
                    <div className="footer-social-icon">
                        <GitHubIcon className="icon" style={{backgroundColor: "#222222"}}/>
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-center-title">Useful Links</h3>
                <ul className="footer-center-list">
                    <li className="footer-center-listItem">Home</li>
                    <li className="footer-center-listItem">Cart</li>
                    <li className="footer-center-listItem">Man Fashion</li>
                    <li className="footer-center-listItem">Woman Fashion</li>
                    <li className="footer-center-listItem">Accessories</li>
                    <li className="footer-center-listItem">My Account</li>
                    <li className="footer-center-listItem">Order Tracking</li>
                    <li className="footer-center-listItem">Wishlist</li>
                    <li className="footer-center-listItem">Wishlist</li>
                    <li className="footer-center-listItem">Terms</li>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="footer-right-title">Contact</h3>
                <div className="footer-right-contactItem">
                    <RoomIcon style={{marginRight: "10px"}}/>
                    622 Dixie Path, South Tobinchester 98336
                </div>
                <div className="footer-right-contactItem" >
                    <PhoneIcon style={{marginRight: "10px"}}/>
                    +1 234 56 78
                </div>
                <div className="footer-right-contactItem">
                    <MailOutlineIcon style={{marginRight: "10px"}}/>
                    contact@lama.com.br
                </div>
                <img className="footer-right-image" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment cards"/>
            </div>
        </div>
    )
}