import React from "react";
import {Link} from "react-router-dom";

export function NotLoggedIn(){
    return(
        <div id={"login"}>
            <colorText>You</colorText> are not <colorText>logged</colorText> in.<br/>
            <Link to={"login"}>Log in</Link> or <Link>sign up</Link>
        </div>
    )
}