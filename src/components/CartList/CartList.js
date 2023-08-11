import { useSelector, useDispatch } from "react-redux";
import { actions, cartSortSelector, cartSelector } from "../../redux/reducers/cartReducer";
import styles from "./CartList.module.css";
import CartListItem from "./CartListItem";
import CartListEditItem from "./CartListEditItem";
 

const CartList=()=> {
  let fetchdone = Boolean(localStorage.getItem('fetchdone'));
    console.log("fetchdone",fetchdone);
    let products=useSelector(cartSelector);
    let sorter=useSelector(cartSortSelector)
    const dispatch = useDispatch();
    console.log("products:",products);

    const url="https://my-json-server.typicode.com/HarishPJ21/react-ecommerce/db"
    if(!fetchdone){
      fetch(url).then((Response)=>Response.json()).then((data)=>{
        console.log("enteered:",data.products)
              data.products.map((product,index)=>{        
                console.log("index",index,":",product.data)
                dispatch(actions.add(product.data));
          });    
      })
      localStorage.setItem('fetchdone','1');         
    }
  return (
    <>
      <div>
        
        <button  className={styles.actionbutton}
        onClick={()=>{dispatch(actions.sorter())}} >  
        {!sorter && <img className={styles.actionicons} src="https://cdn-icons-png.flaticon.com/512/2582/2582618.png"/>}
        {sorter && <img className={styles.actionicons} src="https://cdn-icons-png.flaticon.com/512/1632/1632708.png"/>}
        sort by price
        </button>
      </div>
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


