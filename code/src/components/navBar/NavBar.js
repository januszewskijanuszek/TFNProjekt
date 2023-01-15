import React from "react";
import "./NavBar.css"
import {BiSearchAlt} from "react-icons/bi";
import NavBarButton from "./NavBarButton";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

export default function NavBar(){
    return(
        <>
        <div id={"nav-bar"}>
            <Link to={"/"}>
                <div id={"logo"}>
                    Spore<colorText>More</colorText>
                </div>
            </Link>
            <div id={"button-box"}>
                <NavBarButton text={"Short Range"}/>
                <NavBarButton text={"Long Range"}/>
                <NavBarButton text={"Ammunition"}/>
            </div>
        </div>
            <Outlet/>
        </>
    )
}