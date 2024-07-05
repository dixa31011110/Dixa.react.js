import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data,setdata]=useState([])

    const fetchdata=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchdata()
    })
  return (
    <div>
      <h1>Product</h1>
      {
        data.map((el)=>(<div key={el.id}>
            <img src={el.image} alt="" height={200} width={200} />
        </div>))
      }
    </div>
  );
}

export default Dashboard;
