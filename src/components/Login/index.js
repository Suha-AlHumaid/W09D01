import React, { useState } from "react";
import axios from "axios";
import Tasks from "../Tasks";
import "./style.css";
import Task from "../Task";
const Login = ({ setToken , token}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [role, setRole] = useState("61a6552cb604baf56847ff91");
  const [message, setMessage] = useState("");

  const login = async () => {
    setMessage("");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email,
          password,
        }
      );
      //   console.log(result.data.token);
      //   console.log(result);
      if (result.data.token) {
  
        setMessage("Success");
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
      }
    } catch (error) {
      console.log(error);
      setMessage("faild");
    }
  };
  return (
      <>
    {token? <> <Tasks/></> :<>
    
    
        <div className="home">
      
      <h1>LOGIN FORM</h1>
      <input
        type="email"
        name="email"
        className="form-input"
        placeholder="Email here .."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        className="form-input"
        placeholder="Pasword here .."
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <input
        id="role"
        type="role"
        name="role"
        className="form-input"
        placeholder="Role here .."
        onChange={(e) => setRole(e.target.role)}
      /> */}
      <button onClick={login}>Login</button>
      {message ? message : ""}
    </div>
    </>
    
}
   </>
  );
};

export default Login;
