//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";

import "./MainSheet.css"
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
      <div id={"App"}>
          <Routes>
              <Route path={"/"} element={[<NavBar/>, <Home/>]}>

              </Route>
              <Route path={"*"} element={<NotFound/>}/>
          </Routes>
      </div>
  );
}
export default App;
