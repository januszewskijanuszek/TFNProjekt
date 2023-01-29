import React, {useContext} from "react";
import {Link} from "react-router-dom";
import ButtonImage from "../buttons/ButtonImage";
import {IoBagAddSharp} from "react-icons/io5";
import {CardContext} from "../../UserState";

export default function ShopButton({product}){
    const [cart, setCart] = useContext(CardContext);
    let desc = "";
    const wordLimit = 120;
    const getItemsToCard = () =>{
        console.log("-------------------");
        if(cart === null){
            setCart([[product.id, 1]]);
        } else {
            let temp = cart.valueOf();
            if(cart.filter(element => element[0] == product.id).length == 0){
                temp.push([product.id, 1]);
            } else {
                for(let i = 0 ; i < cart.length ; i++){
                    if(temp[i][0] == product.id){
                        temp[i][1] = product.stock >= temp[i][1]? temp[i][1] + 1 : product.stock;
                    }
                }
            }
            setCart(temp);
            console.log(cart);
        }
    }
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
                    {product.stock > 0 ? <Cart onClick={getItemsToCard}/> : ""}
                </div>
            </div>
        </Link>
    )
}

function Cart({onClick}){
    return(
        <div id={"cart-button"}>
            Add to cart <IoBagAddSharp size={20} onClick={onClick}/>
        </div>
    )
}