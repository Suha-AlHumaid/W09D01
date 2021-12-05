import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import Task from '../Task'
import "./style.css"
const Tasks = ({token}) => {
 const [tasks, setTasks] = useState([])
    useEffect(() => {
        getTasks()
    }, [])
    const getTasks =async ()=>{
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/tasks`,{
            headers: {
                Authorization: `Bearer ${token}` 
        }})
       setTasks(result.data)
       console.log(result.data);

    }
    return (
        <div className="home">
            <h1>Your Todos</h1>
            {tasks&& tasks.map(elem=>
              <Task key={elem._id} elem={elem} token={token} getTasks={getTasks} />
            )}
        </div>
    )
}

export default Tasks
