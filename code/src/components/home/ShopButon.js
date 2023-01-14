import React from "react";
import {Link} from "react-router-dom";
import ButtonImage from "../buttons/ButtonImage";
import {IoBagAddSharp} from "react-icons/io5";

// Title ok
// Photo ok
// Price ok
// Price++ ok
// Short dec ok
// stock ok

export default function ShopButton({product}){
    let desc = "";
    const wordLimit = 120;
    if(product.description.length > wordLimit){
        desc = product.description.substring(0, wordLimit);
        desc = <div>{desc}<colorText>{" (READ MORE)"}</colorText></div>;
    } else {
        desc = product.description
    }
    return(
        <Link to={"/product?" + "id=" + product.id}>
            <div className={"shop-button"}>
                <div id={"image-box"}>
                    <img src={product.image}/>
                </div>
                <div id={"title"}>
                    <div id={"text"}>
                        <colorText>{product.name}</colorText>
                        <div id={"amount"}>{
                            product.stock > 0? <colorText>In stock: {product.stock}</colorText> : "Out of stock"
                        }</div>
                    </div>
                    <div id={"description"}>{desc}</div>
                </div>
                <div id={"control"}>
                    <div id={"price"}>
                        {product.price}zł
                    </div>
                    <div id={"delivery"}>
                        +{product.delivery}zł Delivery
                    </div>
                    <div id={"cart-button"}>
                        <IoBagAddSharp size={20}/>
                    </div>
                </div>
            </div>
        </Link>
    )
}