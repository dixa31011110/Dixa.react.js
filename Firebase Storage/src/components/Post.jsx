import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../services/firebase';



let initialstate = {
    image: "",
    price: "",
    description: "",
    category: "",
    title: ""
}

const Post = () => {

    const [formdata, setformdata] = useState(initialstate)


    const { image, price, description, category, title } = formdata

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value })
    }

    const postdata = async () => {
        try {
            const res = await addDoc(collection(db, "products"), formdata)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

        //     addDoc(collection(db,"products"),formdata)
        //     .then((res)=>{
        //         console.log(res)
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formdata)
        postdata()
    }

    return (
        <div>
            <h1 style={{ fontFamily: "monospace", textAlign: "center", color: "white" }}>POST YOUR DATA, HERE</h1>
            <form style={{ textAlign: "center", marginTop: "10%" }} onSubmit={handlesubmit}>
                <h2 style={{ fontFamily: "monospace" }}>Please Enter Url</h2>
                <input className='input' style={{ width: "300px", height: "38px", fontFamily: "monospace", fontSize: "15px", textAlign: "center", backgroundColor: "#F4A290", border: "0px" }} type="text" onChange={(e) => handlechange(e)} value={image} name='image' placeholder='Image' />
                <h2 style={{ fontFamily: "monospace" }}>Title</h2>
                <input className='input' style={{ width: "300px", height: "38px", fontFamily: "monospace", fontSize: "15px", textAlign: "center", backgroundColor: "#F4A290", border: "0px" }} type="text" onChange={(e) => handlechange(e)} value={title} name='title' placeholder='Title' /><br /><br />
                <h2 style={{ fontFamily: "monospace" }}>Select Your Category</h2>
                <select className='input' style={{ width: "300px", height: "38px", fontFamily: "monospace", fontSize: "15px", textAlign: "center", backgroundColor: "#F4A290", border: "0px" }} onChange={(e) => handlechange(e)} value={category} name='category'><br />
                    <option value={""}>Select Your Category</option>
                    <option value={"Pre-nursury"}>Pre-nursury</option>
                    <option value={"Creativity"}>Creativity</option>
                    <option value={"IQ-Games"}> IQ 
                        Games</option>
                    <option value={" Kids Indoor Games"}>  Kids Indoor Games </option>
                </select><br /><br />
                <h2 style={{ fontFamily: "monospace" }}>Price</h2>
                <input className='input' style={{ width: "300px", height: "38px", fontFamily: "monospace", fontSize: "15px", textAlign: "center", backgroundColor: "#F4A290", border: "0px" }} type="text" onChange={(e) => handlechange(e)} value={price} name='price' placeholder='Price' /><br /><br />
                <h2 style={{ fontFamily: "monospace" }}>Description</h2>
                <input className='input' style={{ width: "300px", height: "38px", fontFamily: "monospace", fontSize: "15px", textAlign: "center", backgroundColor: "#F4A290", border: "0px" }} type="text" onChange={(e) => handlechange(e)} value={description} name='description' placeholder='description' /><br /><br />
                <input  className='home-btn-btn' style={{ height: "50px", width: "150px", fontFamily: "monospace", fontSize: "20px" }} type="submit" />
            </form>
        </div>
    );
}

export default Post;
