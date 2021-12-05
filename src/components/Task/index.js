import React,{useEffect} from 'react'
import axios from 'axios'
import "./style.css"
const Task = ({elem , token,getTasks}) => {
   
    useEffect(() => {
        getTasks()
    
    }, [])

        const deleteTask =async ()=>{
            const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/task/${elem._id}`,{
                headers: {
                    Authorization: `Bearer ${token}` 
            }})
            // console.log(result.data);
            // getTasks();
    }

    return (
        <div className="home">
            <div className="task">
            <h2>{elem.task}</h2>  <span className="icon" onClick={()=>{
                deleteTask()  
                getTasks()
            }}>X</span>
            </div>
          
        </div>
    )
}

export default Task
