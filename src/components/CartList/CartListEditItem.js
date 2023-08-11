import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/cartReducer";
// import { todoSelector } from "../../redux/reducers/todoReducer";
import { cartSelector } from "../../redux/reducers/cartReducer";
import styles from "./CartList.module.css";
import { useFormInput } from "../../hooks";
import { useToasts } from "react-toast-notifications";
 

const CartListEditItem=(props)=> {
  let {product,index} = props;
  const {addToast} = useToasts();

    // console.log(cartSelector);

    
    console.log("edit products",product);
    const disptach = useDispatch();

    const title=useFormInput(product.data.title);
    const rating=useFormInput(product.data.rating);
    const description=useFormInput(product.data.description);
    const price=useFormInput(product.data.price);
    // const todos= store.getState().todos;

  return (
        <div className={styles.cartitem}>
        {/* {product.data.edit=true} */}
        {/* {console.log(product.data)} */}
        <div className={styles.leftblock}>
        <div className={styles.leftblock}>
            <img className ={styles.cartimage} src={product.data.img}/>
        </div>
        <div className={styles.rightblock}>
        <div style={{fontSize:25, paddingBottom:5}}>
        <input type="text"  className={styles.inputfield} 
        placeholder="Enter Name" {...title} />
        </div>

        <div style={{color:'#777'}}>Rs  
        <input type="text" // className={} 
        placeholder="Enter Name" {...price} />
        </div>

        <div style={{fontSize:25}}> Rating </div>
        
        <div>  
        <input type="text" // className={} 
        placeholder="Enter Name" {...rating} />
        </div>
        
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
            onClick={()=> {disptach(actions.delete(index)) }}
            />
          <img alt='edit' 
          className={styles.actionicons} 
          src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' 
          onClick={()=>{disptach(actions.edit(index))}} 
          />
        </div>
        </div>
        </div>    
        
        <div className={styles.rightdescriptionblock}>
        <textarea className={styles.descriptionblockedit} type="textarea" // className={} 
        placeholder="Enter Name" {...description} />
        {/* cancel button */}
        <button className="btn btn-success float-end" onClick={()=>{disptach(actions.cancel(index))}}> cancel </button>
        
        {/* save button */}
        <button className="btn btn-success float-end" onClick={()=>{disptach(actions.save(
          {
            index,
            data:{
              data:{              
              ...product.data,
              title:title.value,
              price:price.value,
              rating:rating.value,
              description:description.value},
              edit:false
            }
          }
          ))
          return addToast("Product Updated Successfully",{appearance:"success"});
          
          }}> save </button>
          </div>
        {}
        {}
        </div>
);
}

export default CartListEditItem;