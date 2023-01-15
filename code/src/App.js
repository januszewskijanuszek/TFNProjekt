//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";

import "./MainSheet.css"
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (
      <div id={"App"}>
          <Routes>
              <Route path={"/"} element={<NavBar/>}>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"product"} element={<ProductDetails/>}/>
              </Route>
              <Route path={"*"} element={<NotFound/>}/>
          </Routes>
      </div>
  );
}
export default App;
