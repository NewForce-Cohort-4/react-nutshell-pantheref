import React, { useContext } from "react"
import {TaskContext} from "./TaskProvider"
import "./Task.css"

export const TaskCard = ({task}) => {
    const {updateTask, getTasks} = useContext(TaskContext)
    

    const handleCheckBox = (idOfCurrentTask) => {
        console.log("clickbox")

    updateTask(idOfCurrentTask)
    .then(getTasks)
    }

    
    
        return (
            <section className="task">
                <div>
                    <input 
                    type="checkbox" 
                    id={task.id} 
                    onClick={()=>handleCheckBox(task.id)}/>
                </div>
                <div className="task_task">Task: {task.task}</div>
                <div className="task_dueDate">Due Date: {task.dueDate}</div>
    
            </section>
            
        )
}
    
 



