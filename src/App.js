import { Fragment } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CartList from "./components/CartList/CartList";
import AddCartForm from "./components/AddCartForm/AddCartForm";

function App() {
  return (
    <div>
      <NavBar />
      {/* we will route the components wrt the path selected using BrowserRouter */}
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}>
            
          </Route>
          <Route path="cart"
          element={
            <Fragment>
             <h1>Cart Items</h1>
              <CartList  />
            </Fragment>
          }>

          </Route>
          <Route path="add-cart"
          element={
            <Fragment>
             <h1>Add Cart Item</h1>
              <AddCartForm />
            </Fragment>
          }>

          </Route>
        </Routes>
       
        </BrowserRouter>
    </div>
  );
}

export default App;
