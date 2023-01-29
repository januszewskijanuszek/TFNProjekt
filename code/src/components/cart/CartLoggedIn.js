import React, {useContext} from "react";
import {CardContext} from "../../UserState";
import "./NotLoggedIn.css"
import {Link} from "react-router-dom";
import products from "./../../jsons/products.json"
import {FaTrash} from "react-icons/fa";
import {Button} from "../product/ProductDetails";

export default function CartLoggedIn(){
    const [cart, setCart] = useContext(CardContext);
    setCart(cart);
    let content = cart === null? <EmptyCart/> : <Something/>
    return(
        <div id={"logged-in-cart"}>
            {content}
        </div>
    )
}

function Something(){
    const [cart, setCart] = useContext(CardContext);
    setCart(cart);
    return(
        <div>
            {cart.map((element, i) => (
                <CartElement tile={i} id={element[0]} amount={element[1]}/>
            ))}
        </div>
    )
}

function CartElement({tile, id, amount}){
    const [cart, setCart] = useContext(CardContext);
    const product = products[id];
    setCart(cart);
    return(
        <div id={"card-tile"}>
            <div id={"title-section"}>
                {product.name} x {amount}
            </div>
            <div id={"trash"}>
                <FaTrash onClick={() => {
                    console.log(cart);
                    console.log(tile);
                    let essa = cart.slice();
                    essa.splice(tile,1)
                    console.log(essa)
                    setCart(essa);
                    if(cart.length === 0) setCart(null);
                    if(essa.length === 0) setCart(null);
                }}/>
            </div>
        </div>
    )
}

function EmptyCart(){
    return(
        <div id={"not-logged-in-cart"}>
            <colorText>Your</colorText> Card Is <colorText>Empty</colorText> <br/>
            Go buy <Link to={"../../"}>something</Link>
        </div>
    )
}