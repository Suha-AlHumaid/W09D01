import React, { useEffect, useState } from "react";
import Register from "../Register";
import Login from "../Login";
import Tasks from "../Tasks";
import "./style.css";
import Task from "../Task";
const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token1 = localStorage.getItem("token");
    setToken(token1);
  }, []);
  return (
    <>
      {!token ? (
        <div className="home">
          <Login setToken={setToken} token={token}/>
          <Register />
        </div>
      ) : (
        <Tasks token={token} setToken={setToken} />
      )}
    </>
  );
};

export default Home;
