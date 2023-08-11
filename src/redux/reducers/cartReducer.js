import { useState } from "react";

const { createSlice } = require("@reduxjs/toolkit")

const CartReducer=()=> {
    const [apiproducts,setApiproducts] = useState([]);
    const url="https://my-json-server.typicode.com/HarishPJ21/react-ecommerce/db"
    fetch(url).then((Response)=>Response.json()).then((data)=>{
        setApiproducts(data.products);
    })        
    // console.log("api data:",apiproducts);
    return apiproducts;
    // console.log("fr data:",fr);
}
    
console.log(CartReducer);
const initialState={
    products:[
        {
            data:{
                price: 10000,
                title: 'watch',
                qty: 1,
                rating: 4,
                img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
                description: "description description description description description description description description description description description description description description description description description description "
                
                // id:1                      
            },edit:false
        },
        {
            data:{
                price: 5000,
                title: 'Laptop',
                qty: 1,
                rating: 4.5,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',        
                description: "description description description description description description description description description description description description description description description description description description "
                // id:2              
            },edit:false
        },
        // ...fr
        // CartReducer
    ],
    sorted: false
}
console.log("initialState:",initialState);

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        // this is add action
        add:(state, action)=>{
            // console.log("add action:",action.payload);
            // console.log("before add action:",state);
                state.products.push({
                    data:action.payload,
                    edit:false
                })
        },
        delete:(state, action)=>{
            state.products.splice(action.payload,1);
    },
        edit:(state,action)=>{
            state.products[action.payload].edit=!state.products[action.payload].edit;
            // state.products.map((product,i)=>{
            //     if(i == action.payload) product.edit=true;
            //     return product;
            // })
        },
        cancel:(state, action)=>{
            state.products[action.payload].edit=false;
        },
        save:(state, action)=>{
            // console.log("state.products",initialState.products);
            state.products[action.payload.index]=action.payload.data;
        },
        sorter:(state, action)=>{
            state.sorted=!state.sorted;
        },
        
    }
});

export const cartReducer=cartSlice.reducer;

export const actions = cartSlice.actions;

// selector
export const cartSelector = (state)=>{
    // console.log('state.cartReducer',state);
    if(state.cartReducer.sorted) return [...state.cartReducer.products].sort((a, b)=>a.data.price - b.data.price);    
    return state.cartReducer.products;
}

export const cartSortSelector = (state)=>{
    // console.log('state.cartReducer',state);
    return state.cartReducer.sorted;
}
