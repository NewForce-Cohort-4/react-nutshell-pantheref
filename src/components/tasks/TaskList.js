import React, {useContext, useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {TaskContext} from "./TaskProvider"
import {TaskCard} from "./Task"
import "./Task.css"

export const TaskList = () => {
    //this state changes when getTask is rendered below
    const {tasks, getTasks} = useContext(TaskContext)
    const history = useHistory()
    const [filteredTask, setFiltered] = useState([])

    //reaches out to the world and gets all the data from the API call for the tasks
    useEffect(() => {
        console.log("TaskList: useEffect- getTasks")
        getTasks()
    }, [])
    //the empty brackets are the dependency array

   

    return (
        <>
        <h1>Tasks List</h1>
        <button onClick={() => history.push("/tasks/create")}>
            Add Task
        </button>
        
        <div className="tasks">
            {console.log("TaskList: Render", tasks)}
            {
                tasks.map(currentTask => {
                    
                    //invoke the function TaskCard
                    //key and task are properties  of an object that get passed in as an argument
                    return <TaskCard  key={currentTask.id} task={currentTask}/>
                })
            }
        </div>
        </>
    )
}