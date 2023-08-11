
import styles from "./Home.module.css";

function Home(){

    return(
        <div className={styles.container}>
            <a href="cart" className={"btn btn-warning "+styles.link}>
                VIEW CART
            </a>
            <a href="add-cart" className={"btn btn-warning "+styles.link}>
                ADD CART
            </a>
        </div>
    )
}

export default Home;