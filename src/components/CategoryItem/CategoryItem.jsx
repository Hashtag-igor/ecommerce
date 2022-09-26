import React from "react";
import { Link } from "react-router-dom"

import "./CategoryItem.css"

export default function CategoryItem({item}){
    return(
        <div className="category-container">
            <img className="category-image" src={item.img} alt=""/>
            <div className="category-info">
                <h1 className="category-title">{item.title}</h1>
                <Link to="/productlist" style={{textDecoration: "none"}}><button className="category-button">SHOP NOW</button></Link>
            </div>
        </div>
    )
}