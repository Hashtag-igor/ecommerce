import React from "react";

import "./Newsletter.css"
import SendIcon from '@mui/icons-material/Send';

export default function Newslatter(){
    return(
        <div className="newsletter-container">
            <h1 className="newsletter-title">NewsLetter</h1>
            <div className="newsletter-desc">Get timely updates from your favorite products.</div>
            <div className="newsletter-input-container">
                <input className="newsletter-input" type="text" placeholder="Your email"/>
                <button className="newsletter-button">
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}