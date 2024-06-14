import axios from 'axios';
import React, { useState } from 'react';

const UpdatePrice = () => {
    const[price,setprice]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()

        const id = 5

        axios.patch(`http://localhost:3000/product/${id}`,{
            price
        }).then((res)=>alert("updated"))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>setprice(e.target.value)} placeholder='Price' />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UpdatePrice;
