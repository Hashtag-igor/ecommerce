import React from "react";

import "./Product.css"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Product(){
    return(
        <div>
            <Navbar />
            <Announcement />
            <div className="page-product-wrapper">
                <div className="page-product-imgcontainer">
                    <img className="page-product-imgcontainer-image" src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/677/696/products/real-madrid-masc-chinese-dragon-22-231-2f29c4079db301bc7416530721743425-640-0.png" alt="jeans" />
                </div>
                <div className="infocontainer">
                    <h1 className="infocontainer-title">Denim Jumpsuit</h1>
                    <p className="infocontainer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione necessitatibus fugit. Iure, saepe. Dolorem quas cum pariatur odit error impedit modi eum officiis optio tempora, rem quisquam et? Cumque.</p>
                    <span className="infocontainer-price">$ 20</span>
                    <div className="infocontainer-filtercontainer">
                        <div className="infocontainer-filter">
                            <span className="icf-title">Color</span>
                            <div className="icf-color" style={{backgroundColor: "black"}}></div>
                            <div className="icf-color" style={{backgroundColor: "darkblue"}}></div>
                            <div className="icf-color" style={{backgroundColor: "gray"}}></div>
                        </div>
                        <div className="infocontainer-filter">
                            <span className="icf-title">Size</span>
                            <select className="filtersize">
                                <option className="filtersize-option" color="black">XS</option>
                                <option className="filtersize-option" color="darkblue">S</option>
                                <option className="filtersize-option" color="gray">M</option>
                                <option className="filtersize-option" color="gray">L</option>
                                <option className="filtersize-option" color="gray">XL</option>
                            </select>
                        </div>
                    </div>
                    <div className="addcontainer">
                        <div className="amountcontainer">
                            <span className="remove">-</span>
                            <span className="amount">1</span>
                            <span className="add">+</span>
                        </div>
                        <button className="button">ADD TO CART</button>
                    </div>
                </div>
            </div>  
            <Newsletter />
            <Footer />
        </div>
    )
}