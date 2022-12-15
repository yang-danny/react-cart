import React, { useState } from "react";
import {useEffect} from "react";

const Cart =({cart, setCart, handleChange})=>{
const [price, setPrice]=useState(0)
const handlePrice=()=>{
    let amount=0
    cart.map((item)=>(
        amount+=item.amount*item.price
    ))
    setPrice(amount)
}
useEffect(()=>{
    handlePrice()
})
const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id!==id)
    setCart(arr)
}
return(
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item,+1)}>< i class="fa-regular fa-square-plus"></i></button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item,-1)}><i class="fa-regular fa-square-minus"></i></button>
                    </div>
                    <div>
                        <span>${item.price*item.amount}</span>
                        <button onClick={()=>handleRemove(item.id)}><i class="fa-regular fa-circle-xmark"></i></button>
                    </div>
                </div>

            ))
        }
        <div className="total">
            <span>Total Price: </span>
            <span>${price}</span>
        </div>
    </article>
)
}
export default Cart;