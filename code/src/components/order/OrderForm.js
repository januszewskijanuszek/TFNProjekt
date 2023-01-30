import React from "react";
import "./OrderStyle.css"

export default function OrderForm(){
    return(
        <div className={"content"}>
            <div id={"order"}>
                <div id={"title"}>
                    <colorText>One</colorText> more step
                </div>
                <div id={"form-content"}>
                    <input
                        type={"text"}
                        placeholder={"Address"}/>
                    <input
                        type={"number"}
                        placeholder={"Gun license number"}/>
                    <div id={"payment"}>
                        Payment <colorText>Method</colorText>:<br/>
                        <Delivery/>
                        <div id={"order-button"}>
                            ORDER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Delivery(){
    return(
        <>
            <DeliveryElements value={"visa"} img={"https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg"}/>
            <DeliveryElements value={"kidney"} img={"https://static.vecteezy.com/system/resources/previews/005/920/692/original/human-kidney-and-its-arteries-isolated-on-white-background-illustration-of-human-kidney-organ-free-vector.jpg"}/>
            <DeliveryElements value={"paypal"} img={"https://rootblog.pl/wp-content/uploads/2018/11/paypal-logo-1-1160x600.jpg"}/>
        </>
    )
}

function DeliveryElements({img, value}){
    return(
        <div id={"element"}>
            <input id={"radio"} type={"radio"} name={"payment"} value={value}/>
            <img width={200} src={img}/>
        </div>
    )
}