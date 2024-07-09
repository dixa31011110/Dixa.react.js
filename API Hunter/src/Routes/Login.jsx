import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const {loginUser,authstate}=useContext(AuthContext)
const navigate=useNavigate()

console.log(authstate)
const handlesubmit=(e)=>{
e.preventDefault()
let userdata={
  email,password
}
axios.post("https://reqres.in/api/login",userdata)
.then((res)=>{loginUser(res.data.token)
  navigate("/dashboard")
})
.catch((err)=>{console.log(err)})
}

  return (
    <div>
      <form data-testid="login-form" onSubmit={handlesubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input"
            onChange={(e)=>setemail(e.target.value) }
            type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              onChange={(e)=>setpassword(e.target.value) }
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;