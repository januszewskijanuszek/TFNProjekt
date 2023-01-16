import React, {createContext, useContext, useRef} from "react";
import "./NavBar.css"
import {BiSearchAlt} from "react-icons/bi";
import NavBarButton from "./NavBarButton";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import {UserContext} from "../../UserState";
import {NotLoggedIn} from "./NotLoggedInNav";
import {LoggedIn} from "./LoggedInNav";

export default function NavBar(){
    const [session, setSession] = useContext(UserContext)
    console.log(session)
    let loggedIn;
    if(session === null) loggedIn = <NotLoggedIn/>;
    else loggedIn = <LoggedIn/>
    return(
        <>
        <div id={"nav-bar"}>
            <Link to={"/"}>
                <div id={"logo"}>
                    Spore<colorText>More</colorText>
                </div>
            </Link>
            <div id={"button-box"}>
                <NavBarButton to={"../../../"} text={"Home"}/>
                <NavBarButton text={"Promos"}/>
                <NavBarButton text={"Long Range"}/>
                <NavBarButton text={"Cart"}/>
            </div>
            <div id={"login-area"}>
                {loggedIn}
            </div>
        </div>
            <Outlet/>
        </>
    )
}