import React, {useState} from "react";
import "./Home.css"
import ShopButton from "./ShopButon";
import products from "./../../jsons/products.json"
import {BiSearchAlt} from "react-icons/bi";
import ListElements from "./ListElements";

export default function Home(){
    const [inputText, setInputText] = useState("");
    let searchInput = (f) =>{
        let lowerCase = f.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return(
        <div className={"content"} id={"home-page"}>
            <div id={"home-page-question"}>
                <div id={"title-text"}>
                    What are <colorText>you</colorText> looking <colorText>for?</colorText>
                </div>
                <div id={"search-ico"}>
                    <BiSearchAlt color={"#e77312"} size={45}/>
                </div>
                <div id={"search-bar"}>
                    <input onChange={searchInput} type="text"  id={"search-bar"} placeholder={"Search"}/>
                </div>
            </div>
            <div id={"content"}>
                <ListElements search={inputText}/>
            </div>
        </div>
    )
}