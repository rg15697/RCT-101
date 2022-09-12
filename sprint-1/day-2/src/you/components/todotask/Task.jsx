import React from "react";

export const Task = () => {
    const [query,setQuery] = React.useState("");
    const [tasks,setTasks] = React.useState([])


    const handleChange = (e) => {
         const value = e.target.value;
         setQuery(value)    
    }
    const handleadd = () => {
        const payload = {
            title:query,
            status:false
        }
        let newTasks = [...tasks,payload];
        setTasks(newTasks)
    }

    return (
        <div>
            <h1>Tasks</h1>
            <div>
                <input
                 type="text"
                 onChange={handleChange}
                 placeholder="add Somethibg"
                 />
                 <button onClick={handleadd} >Add</button>
            </div>
            <div>
                {tasks.map((item) => {
                    return <div>{item.title} </div>
                })}
            </div>
        </div>
    )
}