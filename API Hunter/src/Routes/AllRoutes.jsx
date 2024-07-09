import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SingleProductPage from "./SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/dashboard" element={
    <PrivateRoute>
    <Dashboard/>
   </PrivateRoute>
  }></Route>
  <Route path="/proucts/:id" element={<SingleProductPage/>}></Route>
</Routes>
    </div>
  ); 
}

export default AllRoutes;