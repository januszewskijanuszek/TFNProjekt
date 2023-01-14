import React from "react";
import {AiOutlineCloseSquare} from "react-icons/ai";
import "./MainButtonSheet.css";
import {Link} from "react-router-dom";


export default function ButtonImage({width=50, height=50, image = AiOutlineCloseSquare(), to}){
    return(
        <div className={"button-image"}>
            <Link to={to}>
                {image}
            </Link>
        </div>
    )
}