import React from "react";
import "./NavBar.css"
import {BiSearchAlt} from "react-icons/bi";
import NavBarButton from "./NavBarButton";
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div id={"nav-bar"}>
            <Link to={"/"}>
                <div id={"logo"}>
                    Spore<colorText>More</colorText>
                </div>
            </Link>
            <div id={"search-ico"}>
                <BiSearchAlt size={45}/>
            </div>
            <div id={"search-bar"}>
                <input type="text" id={"search-bar"} placeholder={"Search"}/>
            </div>
            <div id={"button-box"}>
                <NavBarButton text={"Short Range"}/>
                <NavBarButton text={"Long Range"}/>
                <NavBarButton text={"Ammunition"}/>
            </div>
        </div>
    )
}