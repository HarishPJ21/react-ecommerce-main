import { useSelector, useDispatch } from "react-redux";
import { actions, cartSortSelector, cartSelector } from "../../redux/reducers/cartReducer";
import styles from "./CartList.module.css";
import CartListItem from "./CartListItem";
import CartListEditItem from "./CartListEditItem";
 

const CartList=()=> {
  let fetchdone = Boolean(localStorage.getItem('fetchdone'));
  // we need to fetch data only once as we are storing it in local stoage so we used a local condition fetchdone
  //  is no initally fetchdone will be blank then we fetch the data after the we will set fetch done to some value  

    // getting products data from the selector 
    let products=useSelector(cartSelector);
    
    // getting sorter data from the selector 
    let sorter=useSelector(cartSortSelector)
    
    const dispatch = useDispatch();
    //fetching data from below url and pushing it into the store using action
    const url="https://my-json-server.typicode.com/HarishPJ21/HostDB/db"
    if(!fetchdone){
      localStorage.id = JSON.stringify(2);
      fetch(url).then((Response)=>Response.json()).then((data)=>{
        // console.log("enteered:",data.products)
              data.products.map((product,index)=>{        
                // console.log("index",index,":",product.data)
                return dispatch(actions.add(product.data));
          });    
      })
      localStorage.setItem('fetchdone','1');         
    }
  return (
    <>
      <div>
        
        <button  className={styles.actionbutton}
        onClick={()=>{dispatch(actions.sorter())}} >  
        {/* updating different images based on the sorter value  */}
        {!sorter && <img className={styles.actionicons} alt="" src="https://cdn-icons-png.flaticon.com/512/2582/2582618.png"/>}
        {sorter && <img className={styles.actionicons} alt="" src="https://cdn-icons-png.flaticon.com/512/1632/1632708.png"/>}
        sort by price
        </button>
      </div>
      {/* rendering the products one by one and passing it into the components via props based upon the condition edit */}
        {products.map((product,index)=>(
        <>
        { product.edit ? 
        <CartListEditItem product={product} index={index} key={index} /> :
        <CartListItem product={product} index={index} key={index}/> }
        </>
      ))}
    </>
);
}

export default CartList;


