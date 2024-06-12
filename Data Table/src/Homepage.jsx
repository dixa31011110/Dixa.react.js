import React, { useEffect, useState } from 'react';
import axios from "axios"

const Homepage = () => {
    const [productData, setproductData] = useState([])
    const [filter, setfilter] = useState(null)
    const [sort, setsort] = useState(null)
    const [page, setpage] = useState(1)
    const[search,setsearch]= useState("")

    const Fetchproduct = () => {
        axios
            .get("http://localhost:3000/product", {
                params: {
                    category: filter,
                    _sort: "price",
                    _order: sort,
                    _limit:"5",
                    _page:page,
                    q:search
                }
            }).then((res) => setproductData(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        Fetchproduct()
    }, [filter, sort, page, search])
    return (
        <div>
            <h1>Home Page</h1>


            <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='search' />








            <button disabled={page==1} onClick={()=>setpage(page-1)}>Prev</button>
            <button disabled>{page}</button>
            <button disabled={page==4} onClick={()=>setpage(page+1)}>next</button>
















            {/* Sort and Filter */}

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <select name="" id="" onChange={(e) => setfilter(e.target.value)}>
                    <option>Select your.....</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select>

                <div>
                    <button onClick={() => setsort("asc")}>LowToHigh</button>
                    <button onClick={() => setsort("desc")}>HighToLow</button>
                </div>
            </div>

{/* ............................................................................................................... */}


            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr", gap: "5px" }}>
                {productData.map((el) => (
                    <div key={el.id} style={{ border: "2px solid teal" }}>
                        <p>{el.id}</p>
                        <img src={el.image} alt="" height={"200px"} width={"200px"} />
                        <h3>{el.title}</h3>
                        <p>{el.price}</p>
                        <p>{el.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homepage;
