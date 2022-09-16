import React from "react"
import "./Navbar.css"

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
                        <SearchIcon style={{color: "gray", fontSize: 16}}/>
                        <input className="input" type="text" placeholder=""/>
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo">LAMA.</h1>
                </div>
                <div className="right">
                    <div className="menuItem">Register</div>
                    <div className="menuItem">Sign in</div>
                    <div className="menuItem">
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}