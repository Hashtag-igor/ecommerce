import React from "react";

import "./Product.css"

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Product({ìtem}){
    return(
        <div className="product-container">
            <div className="product-circle"></div>
            <img className="product-image" src="" alt=""/>
            <div className="product-info">
                <div className="icon">
                    <ShoppingCartOutlinedIcon />
                </div>
                <div className="icon">
                    <SearchOutlinedIcon />
                </div>
                <div className="icon">
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
        </div>
    )
}