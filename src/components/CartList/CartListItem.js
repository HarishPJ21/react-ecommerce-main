import { useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/cartReducer";
import styles from "./CartList.module.css";
import { useToasts } from "react-toast-notifications";

const CartListItem=(props)=> {
  let {product} = props;
  const {addToast} = useToasts();

    const disptach = useDispatch();
    // console.log("product:",product);
    const id=product.id;

  return (
        <div className={styles.cartitem}>
        <div className={styles.leftblock}>
        <div className={styles.leftblock}>
            <img className ={styles.cartimage} alt="" src={product.data.img}/>
        </div>
        <div className={styles.rightblock}>
        <div style={{fontSize:25}} > {product.data.title} </div>

        <div style={{color:'#777'}}>Rs {product.data.price}</div>

        <div style={{fontSize:25}}> Rating </div>
        
        <div> { product.data.rating} </div>
        
        {/* <div style={{color:'#777'}}>Qty{product.data.qty}</div> */}
        
        <div className={styles.cartitemactions}>
          {/* delete button */}

            <img
            alt="delete"
            className={styles.actionicons}
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            onClick={()=>{
              disptach(actions.delete(id));
              return addToast("Product Deleted Successfully",{appearance:"error"});          
            }}
            />

            {/* edit button  */}
          <img alt='edit' 
          className={styles.actionicons} 
          src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' 
          onClick={()=>{
            disptach(actions.edit(id))
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