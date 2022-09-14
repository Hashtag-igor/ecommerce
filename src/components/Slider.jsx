import React, {useState} from "react";

import "./Slider.css";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

export default function Slider(){
    const [click, setClick] = useState(1)
    const firstPage = {transform: 'translateX(0)'}
    const secondPage = {transform: 'translateX(-100vw)'}
    const thirdPage = {transform: 'translateX(-200vw)'}
 
    function returnPage(e){
        if(e === 1){
            return firstPage
        } else if(e === 2){
            return secondPage
        } else if(e === 3){
            return thirdPage
        }
    }

    function changePage(){
        setClick(click +1)
        if( click > 2){
            setClick(1)
        }
    } 

    return(
        <div className="slider-container">
            <div className="slider-wrapper" style={returnPage(click)}>
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

            <div className="arrow-left" onClick={() => changePage()}>
                <ArrowLeftOutlinedIcon style={{fontSize: "40px"}}/>
            </div>
            <div className="arrow-right" onClick={() => changePage()}>
                <ArrowRightOutlinedIcon style={{fontSize: "40px"}}/>
            </div>
        </div>
    )
}