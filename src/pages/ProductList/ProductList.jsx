import React from "react";

import "./ProductList.css";
import Navbar from "../../components/Navbar/Navbar"
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Newslatter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

export default function ProductList(){
    return(
        <div className="productlist-container">
            <Navbar /> 
            <Announcement />         
            <h1 className="productlist-title">Dresses</h1> 
            <div className="productlist-filter-container">
                <div className="productlist-filter">
                    <div className="productlist-filtertext ">Filter Products:</div>
                    <select class="productlist-select">
                        <option value="1" disabled>Color</option>
                        <option value="2">White</option>
                        <option value="2">Black</option>
                        <option value="2">Red</option>
                        <option value="2">Blue</option>
                        <option value="2">Yellow</option>
                        <option value="2">Green</option>
                    </select>
                    <select class="productlist-select">
                        <option value="1" disabled>Size</option>
                        <option value="2">XS</option>
                        <option value="2">S</option>
                        <option value="2">M</option>
                        <option value="2">L</option>
                        <option value="2">XL</option>
                    </select>
                </div>
                <div className="productlist-filter">
                    <div className="productlist-filtertext">Sort Products:</div>
                    <select class="productlist-select">
                        <option value="1">Newest</option>
                        <option value="2">Price (asc)</option>
                        <option value="2">Price (desc)</option>
                    </select>
                </div>
            </div> 
            <Products />
            <Newslatter />
            <Footer />
        </div>
    )
}