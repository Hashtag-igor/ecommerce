import React from "react";

import "./Products.css"
import { popularProducts } from "../../data";
import Product from "../Product/Product";

export default function Products(){
    return(
        <div className="products-container">
            {popularProducts.map((item) =>(
                <Product item={item} key={item.id}/>
            ))}
        </div>
    )
}