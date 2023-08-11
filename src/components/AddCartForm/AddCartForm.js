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
        console.log("submit hit");
        let data={
            title: name.value,
            description:description.value,
            price:price.value,
            rating:rating.value,
            img:imageLink.value
        }
        console.log("submitvalue:",data);
        dispatch(actions.add(data));
        e.preventDefault();
        return addToast("Product Added Successfully",{appearance:"success"});
    }
    return (
      <div className={styles.inputdiv}>
        <form onSubmit={handleSubmit}>
          {/* <div className="input"></div> */}
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
