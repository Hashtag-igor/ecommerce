import React, {useState} from "react";

import "./Slider.css";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../../data";

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
                {sliderItems.map((item)=>(
                <div className="slide" key={item.id} bg={item.bg}>
                    <div className="img-container">
                        <img className="slider-image" src={item.img}></img>
                    </div>
                    <div className="info-container">
                        <h1 className="slider-title">{item.title}</h1>
                        <p className="slider-desc">{item.desc}</p>
                        <button className="slider-button">SHOW NOW</button>
                    </div>
                </div>
                ))}
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

