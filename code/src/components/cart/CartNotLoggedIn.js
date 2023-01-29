import React from "react";
import "./NotLoggedIn.css"
import {Link} from "react-router-dom";

export default function CartNotLoggedIn(){
    return(
        <div id={"not-logged-in-cart"}>
            <colorText>You</colorText> need to be <colorText>logged in</colorText> to see a <colorText>Cart</colorText><br/>
            <colorText>You</colorText> are <colorText>not</colorText> logged in <br/>
            <Link to={"../login"}> Login here</Link>
        </div>
    )
}