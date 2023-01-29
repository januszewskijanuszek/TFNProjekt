import React, {useContext, useState} from "react";
import "./ProductDetails.css"
import getURLAttributes from "../buttons/getUrlAtributes";
import products from "./../../jsons/products.json"
import {FiPlus, FiMinus} from "react-icons/fi";
import {BsCartCheckFill} from "react-icons/bs";
import {CardContext, UserContext} from "../../UserState";

export default function ProductDetails(){
    const product = products[getURLAttributes()];
    const [user, setUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CardContext);
    let [cartAmount, setCartAmount] = useState(1);
    const getItemsToCard = () =>{
        console.log("-------------------");
        if(cart === null){
            setCart([[product.id, cartAmount]]);
        } else {
            let temp = cart.valueOf();
            if(cart.filter(element => element[0] == product.id).length == 0){
                temp.push([product.id, cartAmount]);
            } else {
                for(let i = 0 ; i < cart.length ; i++){
                    if(temp[i][0] == product.id){
                        temp[i][1] = cartAmount;
                    }
                }
            }
            setCart(temp);
            console.log(cart);
        }
    }
    const showCartButton = user === null? <></> : <Button image={<BsCartCheckFill size={37} onClick={getItemsToCard}/>}/>
    const peaceWatcher = () =>{
        if(cartAmount > product.stock){
            setCartAmount(f => f = product.stock);
        }
        if(cartAmount < 1){
            setCartAmount(f => f = 1)
        }
    }
    const decteseCard = () =>{
        peaceWatcher()
        if(cartAmount > 1){
            setCartAmount(f => f - 1);
        }
        peaceWatcher();
    }
    const increaseCard = () =>{
        peaceWatcher()
        if(cartAmount < product.stock){
            setCartAmount(f => f + 1);
        }
        peaceWatcher()
    }
    const isDeliveryForFree = () =>{
        peaceWatcher()
        if(cartAmount >= 5){
            return ([<colorText> FREE </colorText>, true])
        } else {
            return ([<>+ {product.delivery}zł</>, false])
        }
        peaceWatcher()
    }
    const valueChanged = (val) => {
        peaceWatcher()
        let inputNum = val.target.value;
        if(inputNum >= 1 && inputNum <= product.stock){
            setCartAmount(f => f = inputNum);
        } else if(inputNum < 1){
            setCartAmount(f => f = 1);
        } else {
            setCartAmount(f => f = product.stock);
        }
        peaceWatcher()
    }
    function BottomPaymentPannel(){
        if(product.stock != 0){
            return(
                <>
                    <div id={"price"}>
                        {product.price}zł * {cartAmount} {isDeliveryForFree()[0]}
                        = <colorText>{product.price * cartAmount + (isDeliveryForFree()[1]? 0 : product.delivery)}</colorText>
                    </div>
                    <div id={"desc-buy"}>
                        <Button image={<FiPlus
                            onClick={increaseCard}
                            size={37}/>}/>
                        <div id={"counter"}>
                            <input
                                type={"number"}
                                value={cartAmount}
                                onFocus={valueChanged}
                                onChange={valueChanged}
                                placeholder={cartAmount}/>
                        </div>
                        <Button image={<FiMinus
                            onClick={decteseCard}
                            size={37}/>}/>
                        {showCartButton}
                    </div>
                </>
            )
        } else {
            return ( <>OUT OF STOCK</>)
        }
    }
    return(
        <div className={"content"} id={"product-page"}>
            <div id={"desc-img"}>
                <img src={product.image} width={450}/>
            </div>
            <div id={"desc-title"}>
                <div>
                    <colorText>{product.name}</colorText>
                </div>
            </div>
            <div id={"desc-desc"}>
                <div>
                    {product.description}
                </div>
            </div>
            <div id={"desc-price"}>
                <div>
                    Rating
                </div>
            </div>
            <div id={"desc-buy-details"}>
                <BottomPaymentPannel/>
            </div>
        </div>
    )
}
export function Button({image}){
    return(
        <div className={"product-button"}>
            {image}
        </div>
    )
}