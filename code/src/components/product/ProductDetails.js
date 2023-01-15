import React, {useState} from "react";
import "./ProductDetails.css"
import getURLAttributes from "../buttons/getUrlAtributes";
import products from "./../../jsons/products.json"
import {FiPlus, FiMinus} from "react-icons/fi";

export default function ProductDetails(){
    const product = products[getURLAttributes()];
    let [cartAmount, setCartAmount] = useState(1);
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
                            size={57}/>}/>
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
                            size={57}/>}/>
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
function Button({image}){
    return(
        <div className={"product-button"}>
            {image}
        </div>
    )
}