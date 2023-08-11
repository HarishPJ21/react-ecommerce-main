import { Fragment } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CartList from "./components/CartList/CartList";
import AddCartForm from "./components/AddCartForm/AddCartForm";

function App() {
  return (
    <div>
      {/* <Provider store={store}> */}
      <NavBar />
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}>
            
          </Route>
          <Route path="todo"
          element={
            <Fragment>
             <h1>To Dos</h1>
              <TodoForm  />
              <TodoList />
            </Fragment>
          }>

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
              {/* <CartList  /> */}
            </Fragment>
          }>

          </Route>
          <Route path="notes"
          element={
            <Fragment>
               <h1>Notes</h1>
              <NoteForm  />
              <NoteList />
            </Fragment>
          }>
            
            </Route>
        </Routes>
       
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
