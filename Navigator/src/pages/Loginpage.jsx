import React, { useState } from 'react';

const Loginpage = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const handlesubmit = (e) => {
    e.preventDefault()
    let userdata = {
      email, password
    }
    console.log(userdata)

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdata)

    }).then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token)
      })
      .catch((err) => consol.log(err))
  }
  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "fantasy", color: "teal", margin: "25px", textAlign: "center" }}>Please Enter Your Email and Password...Otherwise You Will Not Be Able To Get Information About product </h1>
      <form action="" onSubmit={handlesubmit} style={{ height: "50px", textAlign: "center", display: "flex", justifyContent: "center", width: "40%", margin: "auto" }}>
        <input type="email" onChange={(e) => setemail(e.target.value)} placeholder='Email' />
        <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
        <input type="Submit" />
      </form>
    </div>
  );
}

export default Loginpage;
