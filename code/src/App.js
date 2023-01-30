//App.js
import React, {createContext, useContext, useState} from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";

import "./MainSheet.css"
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import ProductDetails from "./components/product/ProductDetails";
import {CardContext, UserContext} from "./UserState";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import OrderForm from "./components/order/OrderForm";

function App() {
    const [user, setUser] = useState(null);
    const [card, setCard] = useState(null);
  return (
      <CardContext.Provider value={[card, setCard]}>
          <UserContext.Provider value={[user, setUser]}>
              <div id={"App"}>
                  <Routes>
                      <Route path={"/"} element={<NavBar/>}>
                          <Route path={"/"} element={<Home/>}/>
                          <Route path={"product"} element={<ProductDetails/>}/>
                          <Route path={"cart"} element={<Cart/>}/>
                          <Route path={"order"} element={<OrderForm/>}/>
                      </Route>
                      <Route path={"login"} element={<Login/>}/>
                      <Route path={"*"} element={<NotFound/>}/>
                  </Routes>
              </div>
          </UserContext.Provider>
      </CardContext.Provider>
  );
}
export default App;
