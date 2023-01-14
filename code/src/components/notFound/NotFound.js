import React from "react";
import "./NotFound.css"
import ButtonImage from "../buttons/ButtonImage";
import {useLocation} from "react-router-dom";

export default function NotFound(){
    // let location = useLocation();
    return(
        <>
            <h1>Spore<colorText>More</colorText></h1>
            <div id={"not-found-box"}>
                Page <colorText>not found :(</colorText><br/>
                Return to <colorText>home</colorText> page <br/>
                <ButtonImage to={"../../../../../"}/>
            </div>
        </>

    )
}