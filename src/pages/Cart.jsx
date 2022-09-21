import React from "react";

import "./Cart.css";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"

export default function Cart(){
    return(
        <div className="cart-container">
            <Navbar />
            <Announcement />
            <div className="cart-wrapper">
                <h1 className="cart-wrapper-title">YOUR BAG</h1>
                <div className="wrapper-top-container">
                    <button className="wrapper-top-button">CONTINUE SHOPPING</button>
                    <div className="wrapper-top-texts">
                        <span className="wrapper-top-text">Shopping Bag(2)</span>
                        <span className="wrapper-top-text">Your Wishlist(0)</span>
                    </div>
                    <button className="wrapper-top-button" style={{backgroundColor: "black", color: "white"}}>CHECKOUT NOW</button>
                </div>
                <div className="wrapper-bottom-container">
                    <div className="bottom-info">
                        <div className="info-product">
                            <div className="product-productdetail">
                                <img className="productdetail-image" src="http://cdn.shopify.com/s/files/1/1104/4168/products/AA001TM_SHOE_ANGLE_GLOBAL_MENS_TREE_FLYER_NATURAL_BLACK_BLIZZARD_677baa47-76ad-4a6c-8f69-65ac7ae9ab4a_600x600.png?v=1654208209" alt="" />
                                <div className="productdetail-detail">
                                    <span className="detail-productname"><strong>Product:</strong> JESSIE THUNDER SHOES</span>
                                    <span className="detail-productid"><strong>ID:</strong> 93813718293</span>
                                    <div className="detail-productcolor"></div>
                                    <span className="detail-productsize"><strong>Size:</strong> 37.5</span>
                                </div>
                            </div>
                            <div className="product-pricedetail">
                                <div className="pricedetail-productamount-container">
                                    <span className="productamount-add">+</span>
                                    <div className="productamount">2</div>
                                    <span className="productamount-remove">-</span>
                                </div>
                                <div className="pricedetail-productprice">$ 30</div>
                            </div>
                        </div>

                        <div className="info-product">
                            <div className="product-productdetail">
                                <img className="productdetail-image" src="http://cdn.shopify.com/s/files/1/1104/4168/products/AA001TM_SHOE_ANGLE_GLOBAL_MENS_TREE_FLYER_NATURAL_BLACK_BLIZZARD_677baa47-76ad-4a6c-8f69-65ac7ae9ab4a_600x600.png?v=1654208209" alt="" />
                                <div className="productdetail-detail">
                                    <span className="detail-productname"><strong>Product:</strong> JESSIE THUNDER SHOES</span>
                                    <span className="detail-productid"><strong>ID:</strong> 93813718293</span>
                                    <div className="detail-productcolor"></div>
                                    <span className="detail-productsize"><strong>Size:</strong> 37.5</span>
                                </div>
                            </div>
                            <div className="product-pricedetail">
                                <div className="pricedetail-productamount-container">
                                    <span className="productamount-add">+</span>
                                    <div className="productamount">2</div>
                                    <span className="productamount-remove">-</span>
                                </div>
                                <div className="pricedetail-productprice">$ 30</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-summary">Summary</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}