import React, {useContext} from "react";
import {UserContext} from "../../UserState";
import {TiShoppingCart} from "react-icons/ti";

export function LoggedIn(){
    const [user, setUser] = useContext(UserContext);
    const logOutHandler = () => {
        setUser(null);
    }
    return(
        <div id={"login"}>
            <div id={"greetings"}>
                Hello <colorText>{user.login}</colorText>
            </div>
            <LoginButton propt={<TiShoppingCart size={30}/>}/>
            <LoginButton propt={"LogOut"} onClick={logOutHandler}/>
        </div>
    )
}

function LoginButton({propt, onClick}){
    return(
        <div id={"login-button"} onClick={onClick}>
            {propt}
        </div>
    )
}