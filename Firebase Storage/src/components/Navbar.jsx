import React from 'react';
import { Link, NavLink } from 'react-router-dom';






const Navbar = () => {
  return (
    
     <div>

{/* <div style={{ display: "flex", justifyContent: "space-around"}}>
      {links.map((el) => (
        <NavLink  style={({ isActive }) => {
          return isActive ? { color: "hotpink", textDecoration: "none",fontSize:"20px" ,fontFamily:"monospace"} : { color: "teal", textDecoration: "none" ,fontSize:"20px" ,fontFamily:"monospace"}
        }} key={el.path} to={el.path}>{el.title}</NavLink>))}
      <Link to="/Loginpage"><Button variant="primary">Login</Button></Link>
    </div> */}
           <div className='box1' style={{ height: "60px", width: "80%", margin: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            

          
           <Link style={{ textDecoration: "none", fontSize: "38px", color: "white", fontFamily:"monospace" }} to={"/dashboard"}>DASHBOARD</Link>
           <Link style={{ textDecoration: "none", fontSize: "38px", color: "white", fontFamily:"monospace" }} to={"/postdata"}>POSTDATA</Link>
         </div>

       

        <section className='home'>
            <div className='home-content'>
              <h1>Heloo Mommies! Welcome To Our Boba Kinder-Garden</h1>
              <h3>Bringing Families and Nannies Together</h3>
              <p>The safety and well-being of your child are our top priorities. We maintain rigorous safety protocols and ensure that every child feels secure and cared for in our school.</p>
              <div className='home-btn'>
                  <button className='home-btn-btn'><Link style={{ textDecoration: "none", fontSize: "28px", color: "white", fontFamily: "Poppins,sans-serif" }} to={"/login"}>Login</Link></button>
                  
              </div>
              
            </div>
        </section>
    </div>
  );
}
// style={{display:"flex",justifyContent:"space-around"}}

export default Navbar;
