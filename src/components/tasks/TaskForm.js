import React, {useContext, useEffect, useState} from "react"
import {TaskContext} from "../tasks/TaskProvider"
import "./Task.css"
import {useHistory} from 'react-router-dom'

// builds a form to allow the user to create an object for tasks, saves the task to the database
export const TaskForm = () => {
    const {addTask, updateTask, getTaskById, getTasks} = useContext(TaskContext)

    //define the initial state of the from inputs with useState()
    const[task, setTask] = useState({
       task: "",
       dueDate: "0000-00-00",
       userId: +localStorage.getItem("nutshell_user")
    })
    
    const history= useHistory()

    useEffect(() => {
        getTasks()
    }, [])

    //when field changes, update state
    //this causes a re-render and updates the view
    //this is a controlled component
    const handleControlledInputChange = (event) => {
        //when changing a state objet or array
        //always create a copy, make changes, then set state
        //{}make it an object '...' is spread syntax, we have to use this bc we're copying an object(we use .slice with an array)
        const newTask = {...task}
        newTask[event.target.id] = event.target.value
        //update state
        setTask(newTask)
    }

    const handleClickSaveTask = (event) => {
       //prevents the browser from submitting the form
        event.preventDefault()
        task.completed = false
        addTask(task)
        .then(() => history.push("/tasks"))
    }

    


    return (
        <>
        <form className="taskForm">
            <h2 className="taskForm_title">New Task</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="task">Task:</label>
                  <input type="text" id="task" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task" value={task.task}/>
                </div>
            </fieldset>
           
            <fieldset>
                <div className="form-group">
                <label htmlFor="date">Due Date:</label>
                  <input type="date" id="dueDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="dueDate" value={task.dueDate}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
            onClick={handleClickSaveTask}>
            Save New Task
          </button>
        </form>
        </>
    )



}       



