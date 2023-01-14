import React from "react";
import {Link} from "react-router-dom";

export default function NavBarButton({text, to}){
    return(
        <Link to={to}>
            <div id={"nav-button"}>
                {text}
            </div>
        </Link>
    )
}