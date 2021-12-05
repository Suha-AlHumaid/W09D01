import axios from "axios";
import React from "react";
import "./style.css";
const User = ({ elem,getUsers ,token }) => {
  const deletUser = async () => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/user/${elem._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
console.log(result);
      if (typeof result.data === "object") {
        console.log(typeof result.data);
        getUsers();
      }
    
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>
        {elem.email} <span className="icon"   onClick={(e) => {
              e.preventDefault();
              deletUser(); }}>X</span>
      </p>
    </div>
  );
};

export default User;
