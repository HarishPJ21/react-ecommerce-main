
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import {notificationReducer} from './reducers/notificationReducer';
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
        todoReducer,
        noteReducer,
        notificationReducer,
        cartReducer       
})
const persistedReducer = persistReducer(persistConfig,reducer); 
// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

export const store = configureStore({
    reducer: persistedReducer
})

// export const store = configureStore({
//     reducer:{
//         todoReducer,
//         noteReducer,
//         notificationReducer,
//         cartReducer       
//     }
// })

