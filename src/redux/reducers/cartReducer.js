
const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    products:[
        {
            data:{
                price: 10000,
                title: 'watch',
                qty: 1,
                rating: 4,
                img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
                description: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities."
                
            },edit:false
            ,id:0
        },
        {
            data:{
                price: 5000,
                title: 'Laptop',
                qty: 1,
                rating: 4.5,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',        
                description: "A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer (PC) smaller than a briefcase. A laptop can be easily transported and used in temporary spaces such as on airplanes, in libraries, temporary offices and at meetings."
                           
            },edit:false
            ,id:1 
        },
    ],
    sorted: false
}
// let id=3;
const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        // state implies initial state
        //action.payload implies value that we are passing in the function        
        add:(state, action)=>{
            console.log(state.products.length);
            state.products.push({
                    data:action.payload,
                    edit:false,
                    id:state.products.length
                })
        },

        delete:(state, action)=>{
            // state.products.splice(action.payload,1);
            state.products = state.products.filter((product,i)=>{ 
                 return product.id !== action.payload;
            })            
        },
    
        edit:(state,action)=>{
            // state.products[action.payload].edit=!state.products[action.payload].edit;
            state.products.map((product,i)=>{
                if(product.id === action.payload) product.edit=!product.edit;
                return product;
            })            
        },
    
        cancel:(state, action)=>{
            // state.products[action.payload].edit=false;
            state.products.map((product,i)=>{
                if(product.id === action.payload) product.edit=false;
                return product;
            })            
        },
    
        save:(state, action)=>{
            state.products[state.products.findIndex((product)=> product.id === action.payload.id)]=action.payload.data;
            console.log("state products:",state.products)
            console.log(state.products.findIndex((product)=> product.id === action.payload.id));
            
            // state.products.map((product,i)=>{
            //     if(product.id == action.payload.id) {console.log(action.payload.id); product=action.payload.data;}
            //     return product;
            // })            
        },
    
        sorter:(state, action)=>{
            state.sorted=!state.sorted;
        },    
    }
});

//reducer
export const cartReducer=cartSlice.reducer;

//actions
export const actions = cartSlice.actions;


// selector to returm products wrt to the sort value
export const cartSelector = (state)=>{
    if(state.cartReducer.sorted) return [...state.cartReducer.products].sort((a, b)=>a.data.price - b.data.price);    
    return state.cartReducer.products;
}

//Selector fpr sprted value
export const cartSortSelector = (state)=>{
    return state.cartReducer.sorted;
}

// console.log("initialState:",initialState);
