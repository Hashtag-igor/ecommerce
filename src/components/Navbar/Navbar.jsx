import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar(){
    return(
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <span className="language">EN</span>
                    <div className="searchContainer">
                        <SearchIcon style={{color: "gray", fontSize: "16px"}}/>
                        <input className="input" type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="center">
                    <Link to="/" style={{textDecoration: "none"}}><h1 className="logo">LAMA.</h1></Link>
                </div>
                <div className="right">
                    <Link to="/register" style={{textDecoration: "none"}}><div className="menuItem">Register</div></Link>
                    <Link to="/login" style={{textDecoration: "none"}}><div className="menuItem">Sign in</div></Link>
                    <div className="menuItem">
                    <Link to="/cart" style={{color: "black"}}>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}