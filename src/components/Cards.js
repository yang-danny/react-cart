import React from "react";

const Cards =({item, handleClick})=>{
    const {title,brand,price,img}=item;
    return(
        <div className="cards">
            <div className="image_box">
                <img src={img} />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>Brand: {brand}</p>
                <p>Price: ${price}</p>
                <button onClick={()=>handleClick(item)}>Add to Cart <i class="fa-regular fa-square-plus"></i></button>
            </div>
        </div>
    )
    
}

export default Cards;