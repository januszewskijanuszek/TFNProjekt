import React, {useContext} from "react";
import {UserContext} from "../../UserState";
import CartLoggedIn from "./CartLoggedIn";
import CartNotLoggedIn from "./CartNotLoggedIn";

export default function Cart(){
    const [session, setSession] = useContext(UserContext);
    const content = session === null ? <CartNotLoggedIn/> : <CartLoggedIn/>
    return(
        <div className={"content"}>
            {content}
        </div>
    )
}