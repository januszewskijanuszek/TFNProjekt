import React, {useContext, useState} from "react";
import "./LogStyle.css"
import ButtonImage from "../buttons/ButtonImage";
import NavBarButton from "../navBar/NavBarButton";
import users from "./../../jsons/users.json"
import {UserContext} from "../../UserState";
import {Navigate} from "react-router-dom";

export default function Login(){
    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState("");
    const [inputLogin, setLogin] = useState("");
    const [inputPassword, setPassword] = useState("");
    const [redirect, setRedirect] = useState("");
    let counter = 0;
    const handleLogin = () =>{
        let output = users.filter(user => (user.login === inputLogin && user.password === inputPassword))[0];
        if(output === undefined){
            setError(() => "This user does not exist!");
            counter++;
        } else {
            setError(() => "");
            setUser(output);
            setRedirect(f => f = <Navigate to={"../"}/>);
        }
    }
    return(
        <div className={"content-no"}>
            {redirect}
            <h1>Spore<colorText>More</colorText></h1>
            <div id={"login-box"}>
                <div id={"title"}>
                    Log<colorText>In</colorText>
                </div>
                <ButtonImage to={"../../"}/>
                <div id={"form-box"}>
                    <input
                        type={"text"}
                        onChange={(f)=>{setLogin(() => f.target.value)}}
                        placeholder={"Login"}/>
                    <input
                        type={"password"}
                        onChange={(f)=>{setPassword(() => f.target.value)}}
                        placeholder={"Password"}/>
                    <div id={"login-button"}>
                        <NavBarButton text={"LOGIN"} onClick={handleLogin}/>
                    </div>
                    <div className={"error-box"}>
                        <colorText>{error}</colorText>
                    </div>
                </div>
            </div>
        </div>
    )
}