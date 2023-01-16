import React from "react";
import {Link} from "react-router-dom";

export default function NavBarButton({text, to, onClick}){
    return(
        <Link to={to}>
            <div id={"nav-button"} onClick={onClick}>
                {text}
            </div>
        </Link>
    )
}