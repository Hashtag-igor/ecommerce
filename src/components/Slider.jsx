import React from "react";

import "./Slider.css";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

export default function Slider(){
    
    return(
        <div className="slider-container">
            <div className="arrow-left">
                <ArrowLeftOutlinedIcon />
            </div>

            <div className="slider-wrapper">
                <div className="slide">
                    <div className="img-container">
                        <img className="image" src="https://i.pinimg.com/originals/c9/a6/ee/c9a6ee03ac5fe905ea3b86bb97c54c45.png"></img>
                    </div>
                    <div className="info-container">
                        <h1 className="title">SUMMER SALE</h1>
                        <p className="desc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                        <button className="button">SHOW NOW</button>
                    </div>
                </div>

                <div className="slide" style={{backgroundColor: "#fcf1ed"}}>
                    <div className="img-container">
                        <img className="image" src="https://i.pinimg.com/originals/c9/a6/ee/c9a6ee03ac5fe905ea3b86bb97c54c45.png"></img>
                    </div>
                    <div className="info-container">
                        <h1 className="title">WINTER SALE</h1>
                        <p className="desc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                        <button className="button">SHOW NOW</button>
                    </div>
                </div>

                <div className="slide"  style={{backgroundColor: "#fbf0f4"}}>
                    <div className="img-container">
                        <img className="image" src="https://i.pinimg.com/originals/c9/a6/ee/c9a6ee03ac5fe905ea3b86bb97c54c45.png"></img>
                    </div>
                    <div className="info-container">
                        <h1 className="title">POPULAR SALE</h1>
                        <p className="desc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                        <button className="button">SHOW NOW</button>
                    </div>
                </div>
            </div>

            <div className="arrow-right">
                <ArrowRightOutlinedIcon />
            </div>
        </div>
    )
}