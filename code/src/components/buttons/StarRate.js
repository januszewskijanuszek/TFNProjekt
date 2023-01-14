import React from "react";

import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export default function StarRate({amount}){
    const array = Array.from(Array(amount).keys());
    const arrayBad = Array.from(Array( 5 - amount).keys());
    return(
        <div id={"stars"}>
            {array.map((star, i) => (
                <AiFillStar id={i}/>
            ))}
            {arrayBad.map((star, i) => (
                <AiOutlineStar id={i}/>
            ))}
        </div>
    )
}