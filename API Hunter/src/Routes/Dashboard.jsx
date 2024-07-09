import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import ProductsTable from "../Components/ProductsTable";

function Dashboard() {

  const {logoutUser,authstate}=useContext(AuthContext)
const [data,setdata]=useState([])
  useEffect(()=>{
     axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
     .then((res)=>{setdata(res.data.data)})
     .catch((err)=>{console.log(err)})
  },[])
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authstate.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
     <ProductsTable data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;