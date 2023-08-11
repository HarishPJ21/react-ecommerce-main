
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
        cartReducer       
})
const persistedReducer = persistReducer(persistConfig,reducer); 

//will export persistedReducer  
export const store = configureStore({
    reducer: persistedReducer
})

