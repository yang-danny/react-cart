import React from "react";
import phoneList from "../data";
import Cards from "./Cards"
const Phone =({handleClick})=>{
  
    return (
        <section>
        {
            phoneList.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick}/>
            ))
        }
    </section>
    )
}

export default Phone;