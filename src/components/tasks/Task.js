import React from "react"
import "./Task.css"

export const TaskCard = ({task}) => (
    <section className="task">
        <div>
            <input type="checkbox"/>
        </div>
        <div className="task_task">Task: {task.task}</div>
        <div className="task_dueDate">Due Date: {task.dueDate}</div>

    </section>
)



{/* <div className="task_checkbox">{task.id}</div>  */}