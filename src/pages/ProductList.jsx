import React from "react";

import "./ProductList.css";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newslatter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function ProductList(){
    return(
        <div className="productlist-container">
            <Announcement /> 
            <Navbar />         
            <h1 className="productlist-title">Dresses</h1> 
            <div className="productlist-filter-container">
                <div className="productlist-filter">
                    <div className="productlist-filtertext">Filter Products:</div>
                </div>
                <div className="productlist-filter">
                    <div className="productlist-filtertext">Sort Products:</div>
                </div>
            </div> 
            <Products />
            <Newslatter />
            <Footer />
        </div>
    )
}