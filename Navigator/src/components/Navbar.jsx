import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



let links = [
  {
    path: "/", title: "Homepage",
  },
  {
    path: "/Aboutpage", title: "Aboutpage",
  },
  {
    path: "/Productpage", title: "Productpage",
  },
 

]
const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around"}}>
      {links.map((el) => (
        <NavLink  style={({ isActive }) => {
          return isActive ? { color: "hotpink", textDecoration: "none",fontSize:"20px" ,fontFamily:"monospace"} : { color: "teal", textDecoration: "none" ,fontSize:"20px" ,fontFamily:"monospace"}
        }} key={el.path} to={el.path}>{el.title}</NavLink>))}
      <Link to="/Loginpage"><Button variant="primary">Login</Button></Link>
    </div>
  );
}

export default Navbar;
