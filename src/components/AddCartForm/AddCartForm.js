import { actions } from "../../redux/reducers/cartReducer";
import { useDispatch } from "react-redux";
import { useFormInput } from "../../hooks";
import { useToasts } from "react-toast-notifications";
import styles from "./AddCartForm.module.css";

const AddCartForm = ()=>{
  const {addToast} = useToasts();

    const dispatch = useDispatch();
    const name=useFormInput(""), description=useFormInput(""),price=useFormInput(""),rating=useFormInput(""),imageLink=useFormInput("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        //if any value is balnk amoung price image or name it will throw an error 

        if(imageLink.value==="" || price.value==="" || name.value==="") return addToast("please enter a valid Details",{appearance:"error"});
        let data={
            title: name.value,
            description:description.value,
            price:price.value,
            rating:rating.value,
            img:imageLink.value
        }

        dispatch(actions.add(data));
        

        name.setValue(""); description.setValue("");price.setValue(""); rating.setValue(""); imageLink.setValue("");
        return addToast("Product Added Successfully",{appearance:"success"});
    }
    return (
      <div className={styles.inputdiv}>
        <form onSubmit={handleSubmit}>

            <input
            type="text"
            // className={}
            placeholder="Enter Name"
            {...name}
            />
            <input
            type="text"
            // className={}
            placeholder="Enter Price"
            {...price}
            />
            <input
            type="text"
            // className={}
            placeholder="Enter Rating"
            {...rating}
            />
            <input
            type="text"
            // className={}
            placeholder="Enter Image Link"
            {...imageLink}
            />
            <textarea
            className={styles.discription}
            placeholder="Enter description"
            {...description}
            ></textarea>
          <button className="btn btn-success float-end" type="submit">Add Item</button>
        </form>
      </div>
    );
}

export default AddCartForm;
