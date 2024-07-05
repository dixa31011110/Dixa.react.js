import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

let initialstate = {
    image: "",
    price: "",
    description: "",
    category: "",
    title: ""
}

const Dashboard = () => {
    const [products, setproducts] = useState([]);
    const [formdata, setformdata] = useState(initialstate)
    const [id,setid] = useState(0)
    const { image, price, description, category, title } = formdata

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value })
    }

    const handlesubmit = async(e) => {
        e.preventDefault()
        //console.log(id)
        console.log(formdata)
        try {
           await updateDoc(doc(db,"products",id),formdata)
           fetchdataFromFirebaseStore()
        } catch (error) {
            console.log(error)
        }
       
    }

    
    const fetchdataFromFirebaseStore = async () => {
        try {
            const datafromdb = await getDocs(collection(db, "products"))
            console.log(datafromdb)
            if (datafromdb) {
                let filterdata = datafromdb.docs.map((el) => ({ ...el.data(), id: el.id }));
                console.log(filterdata);
                setproducts(filterdata);
            }
        } catch (error) {
            console.log(err)
        }
    }

    const handledeletefun = async (id) => {
        try {
            await deleteDoc(doc(db, "products", id));
            fetchdataFromFirebaseStore();
        } catch (error) {
            console.log(error)
        }
    }


    const handleGetSingledata=async(id)=>{
        // console.log(id)
        setid(id)
        try {
          let res =  await getDoc(doc(db,"products",id))
          let filterdata = res.data()
          setformdata(filterdata)
        } catch (error) {
            console.log(error)
        }
        // setformdata()
    }



    useEffect(() => {
        fetchdataFromFirebaseStore()
    }, [])

    // const [data, setdata] = useState([])
    // const fetchdata = () => {
    //     axios.get("https://fakestoreapi.com/products")
    //         .then((res) => setdata(res.data))
    //         .catch((err) => console.log(err))
    // }
    // useEffect(() => {
    //     fetchdata()
    // }, [])

    return (
        <div style={{height:"auto",width:"60%",margin:"auto"}}>
            <h1 style={{color:"white",textAlign:"center",fontFamily:"Poppins,sans-serif"}}>Dashboard</h1>
            <hr />
            <h1 style={{color:"black",textAlign:"center",fontFamily:"Poppins,sans-serif"}}>Update-Data</h1><hr />
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
            <hr />



            
            
            
            
            
            {products.length > 0 && products.map((el) => (
                <div style={{textAlign:"center"}} key={el.id}>
                    <img src={el.image} height={200} width={300} />
                    <h2 style={{fontFamily:"monospace",letterSpacing:"2px",color:"#aa5240"}}>{el.title}</h2>
                    <h3 style={{fontFamily:"monospace",letterSpacing:"2px",color:"#aa5240"}}>$ {el.price}</h3>
                    <p style={{fontFamily:"monospace",letterSpacing:"2px",color:"#aa5240",fontSize:"16px",fontWeight:"600"}}>{el.description}</p>
                    <button className='home-btn-btn'style={{height:"50px",width:"150px"}} onClick={() => handledeletefun(el.id)}>Delete</button>
                    <button className='home-btn-btn2'style={{height:"50px",width:"150px"}} onClick={() => handleGetSingledata(el.id)}>Edit</button><hr />
                </div>
            ))}
            {/* {
                data.map((el) => (<div key={el.id}>
                    <img src={el.image} alt="" height={200} width={200} />
                </div>))
            } */}
        </div>
    )
}

export default Dashboard;
