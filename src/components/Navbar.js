import React from "react";
import logo from "../logo192.png"
import '../App.css';
const Navbar=({size, setShow})=>{
    return(
        <nav>
         <div className="nav_box">
            <div className="my_shop" onClick={()=>setShow(true)}>
               <img className="logo" src={logo}></img> 
               <p>Hiper Mobile</p> 
            </div>
            <div className="nav_menu">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className="cart" onClick={()=>setShow(false)}> 
                <span><i className="fas fa-cart-plus"></i></span>
           
            <span>{size}</span> 
            </div>
            </div>       
        </nav>
    )
}

export default Navbar;