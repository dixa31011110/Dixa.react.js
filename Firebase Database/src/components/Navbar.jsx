import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <Link to={"/login"} style={{color:"whitesmoke"}}>Login</Link>
      <Link to={"/dashboard"} style={{color:"whitesmoke"}}>Dashboard</Link>
    </div>
  );
}

export default Navbar;
