import products from "../../jsons/products.json";
import ShopButton from "./ShopButon";
import React from "react";

export default function ListElements({search}){
    const filteredData = products.filter((els) => {
        if(search === ''){
            return els;
        } else{
            return els.name.toLowerCase().includes(search);
        }
    })
    return(
        filteredData.map((product, i) =>(
            <ShopButton product={product}/>
        ))
    )
}