
import styles from "./NavBar.module.css";

const NavBar = (props)=>{
    return(
        <nav className={styles.nav}>
          <div className={styles.btn}>
          <span > 
          <a  href="cart">Products</a> 
          </span>
          <span>   
          <a  href="add-cart">Add Products <img className={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/4903/4903809.png'></img></a> 
          </span>
          </div>
        <div className={styles.cartIconContainer}>
          <img className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="cart-icon" />
          {/* <span className={styles.cartCount}>{props.count}</span> */}
        </div>
  {/* <div  class="container-fluid">
    <a class="navbar-brand" href="/">Utility Apps</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={styles.navitem}>
          <a class="nav-link active" aria-current="page" href="todo">To Do</a>
        </li>
        <li className={styles.navitem}>
          <a class="nav-link active" aria-current="page" href="notes">Note</a>
        </li> 
      </ul>
    </div>
    <div className={styles.cartIconContainer}>
          <img className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="cart-icon" />
          <span className={styles.cartCount}>{props.count2}</span>
        </div>
  </div> */}
</nav>
    );
}

export default NavBar;


// import styles from "./NavBar.module.css";
// import * as font from 'font-awesome/css/font-awesome.min.css';
// import React from "react";

// const NavBar = (props)=>{
//     return (
//         <div style={styles.nav}>
        //   <div onClick={}> products </div>
        //   <div> add products <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/4903/4903809.png'></img>  </div>
        // <div style={styles.cartIconContainer}>
        //   <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="cart-icon" />
        //   <span style={styles.cartCount}>{props.count}</span>
        // </div>
//       </div>
//       );
// }


// const styles = {
//     cartIcon: {
//       height: 32,
//       marginRight: 20
//     },
//     nav: {
//       height: 70,
//       background: '#4267b2',
//       display: 'flex',
//       justifyContent: 'flex-end',
//       alignItems: 'center'
//     },
//     cartIconContainer: {
//       position: 'relative'
//     },
//     cartCount: {
//       background: 'yellow',
//       borderRadius: '50%',
//       padding: '4px 8px',
//       position: 'absolute',
//       right: 0,
//       top: -9
//     }
//   };
  
  
//   export default NavBar;
