import axios from 'axios';
import React, { useState } from 'react';

let initialvalue={
    title:"",
    price:"",
    description:"",
    category:"",
    Image:""
}

const PostForm = () => {

    
    const[formdata,setformdata]=useState(initialvalue)
    const{title,price,description,category,image}=formdata

    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/product",formdata).then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
    return (
        <div>
            <h1>Post form</h1>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" name='title' onChange={(e)=>handlechange(e)} value={title} placeholder='title'/> <br />
                <input type="text" name='price' onChange={(e)=>handlechange(e)} value={price} placeholder='price'/> <br />
                <input type="text" name='description' onChange={(e)=>handlechange(e)} value={description} placeholder='description'/> <br />
                <select name="category" onChange={(e)=>handlechange(e)} value={category}>
                    <option value="">Select category</option>
                    <option value="men's cloathing">Men</option>
                    <option value="women's cloathing">Women</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    </select><br />
                <input type="text" name='image' onChange={(e)=>handlechange(e)} value={image} placeholder='image'/> <br />
                <input type="Submit" />

            </form>
        </div>
    );
}

export default PostForm;
