import React, {useContext, useEffect, useState} from "react";
import {CardContext} from "../../UserState";
import "./NotLoggedIn.css"
import {Link} from "react-router-dom";
import products from "./../../jsons/products.json"
import {FaTrash} from "react-icons/fa";
import {Button} from "../product/ProductDetails";

export default function CartLoggedIn(){
    // const [finPrice, setFinPrice] = useState(0);
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
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let sumVal = 0;
        for(let i = 0 ; i < cart.length ; i++){
            sumVal += products[cart[i][0]].price * cart[i][1];
            if(cart[i][1] < 5){
                sumVal += products[cart[i][0]].delivery;
            }
        }
        setSum(sumVal);
    });
    return(
        <div>
            {cart.map((element, i) => (
                <CartElement tile={i} id={element[0]} amount={element[1]}/>
            ))}
            <div id={"card-tile"}>
                <colorText>Sum = {sum}zł</colorText>
                <Link to={"../order"}>
                    <div id={"trash"}>
                        ORDER
                    </div>
                </Link>
            </div>
        </div>
    )
}

function CartElement({tile, id, amount}){
    const [cart, setCart] = useContext(CardContext);
    const product = products[id];
    const isDelivery = amount >= 5? "FREE" : product.delivery + "zł";
    setCart(cart);
    return(
        <div id={"card-tile"}>
            <div id={"title-section"}>
                {product.name} x {amount} =
                <colorText>{product.price * amount}zł </colorText>
                + <colorText>Delivery {isDelivery}</colorText>
            </div>
            <div id={"trash"}>
                <FaTrash onClick={() => {
                    let essa = cart.slice();
                    essa.splice(tile,1)
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