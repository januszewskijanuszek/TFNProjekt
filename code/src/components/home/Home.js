import React from "react";
import "./Home.css"
import ShopButton from "./ShopButon";
import products from "./../../jsons/products.json"

export default function Home(){
    return(
        <div className={"content"} id={"home-page"}>
            <div id={"home-page-question"}>
                What are <colorText>you</colorText> looking <colorText>for?</colorText>
            </div>
            <div id={"content"}>
                <ShopButton product={products[0]}/>
                <ShopButton product={products[1]}/>
                <ShopButton product={products[2]}/>
            </div>
        </div>
    )
}