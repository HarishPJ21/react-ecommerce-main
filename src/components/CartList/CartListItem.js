import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/cartReducer";
import styles from "./CartList.module.css";
import { Toaster } from "../../hooks";
import { useToasts } from "react-toast-notifications";

const CartListItem=(props)=> {
  let {product,index} = props;
  const {addToast} = useToasts();

    // console.log(cartSelector);

    const disptach = useDispatch();
    console.log("product:",product);

  return (
        <div className={styles.cartitem}>
        <div className={styles.leftblock}>
        <div className={styles.leftblock}>
            <img className ={styles.cartimage} src={product.data.img}/>
        </div>
        <div className={styles.rightblock}>
        <div style={{fontSize:25}} > {product.data.title} </div>

        <div style={{color:'#777'}}>Rs {product.data.price}</div>

        <div style={{fontSize:25}}> Rating </div>
        
        <div> { product.data.rating} </div>
        
        {/* <div style={{color:'#777'}}>Qty{product.data.qty}</div> */}
        
        <div className={styles.cartitemactions}>
            {/* {button} */}
            {/* <img
            alt="increase"
            className={styles.actionicons}
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            // onClick={() => {props.increaseQuantity(props.product)}}
            />
            <img
            alt="decrease"
            className={styles.actionicons}
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            // onClick={()=> {props.decreaseQuantity(props.product)}}
            /> */}
            <img
            alt="delete"
            className={styles.actionicons}
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            onClick={()=>{
              disptach(actions.delete(index));
              return addToast("Product Deleted Successfully",{appearance:"error"});          
            }}
            />
          <img alt='edit' 
          className={styles.actionicons} 
          src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' 
          onClick={()=>{
            disptach(actions.edit(index))
          }} 
          />
        </div>
        </div>
        </div>    
        <div className={styles.rightdescriptionblock}>
        <div className={styles.descriptionblock}>
        { product.data.description}
        </div>
        </div>
        </div>    
);
}

export default CartListItem;