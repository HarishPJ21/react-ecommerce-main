import { useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/cartReducer";
import styles from "./CartList.module.css";
import { useFormInput } from "../../hooks";
import { useToasts } from "react-toast-notifications";
 

const  CartListEditItem=(props)=> {
  let {product} = props;
  const {addToast} = useToasts();


    
    // console.log("edit products",product);
    const disptach = useDispatch();
    const id=product.id;

    const title=useFormInput(product.data.title);
    const rating=useFormInput(product.data.rating);
    const description=useFormInput(product.data.description);
    const price=useFormInput(product.data.price);

  return (
        <div className={styles.cartitem}>
        <div className={styles.leftblock}>
        <div className={styles.leftblock}>
            <img className ={styles.cartimage} alt="cart broken" src={product.data.img}/>
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
        
        
        <div className={styles.cartitemactions}>

          {/* delete button */}
            <img
            alt="delete"
            className={styles.actionicons}
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            onClick={()=> {disptach(actions.delete(id)) }}
            />

            {/* edit button */}
          <img alt='edit' 
          className={styles.actionicons} 
          src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' 
          onClick={()=>{disptach(actions.edit(id))}} 
          />
        </div>
        </div>
        </div>    
        
        <div className={styles.rightdescriptionblock}>
        <textarea className={styles.descriptionblockedit} type="textarea" // className={} 
        placeholder="Enter Name" {...description} />
        {/* cancel button */}
        <button className="btn btn-success float-end" onClick={()=>{disptach(actions.cancel(id))}}> cancel </button>
        
        {/* save button */}
        <button className="btn btn-success float-end" onClick={()=>{disptach(actions.save(
          {
            id,
            data:{
              data:{              
              ...product.data,
              title:title.value,
              price:price.value,
              rating:rating.value,
              description:description.value},
              edit:false, id:id
            }
          }
          ))
          return addToast("Product Updated Successfully",{appearance:"success"});
          
          }}> save </button>
          </div>
        </div>
);
}

export default CartListEditItem;