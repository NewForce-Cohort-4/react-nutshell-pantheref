import React, {useContext, useEffect, useState} from "react"
import {TaskContext} from "../tasks/TaskProvider"
import "./Task.css"
import {useHistory, useParams} from 'react-router-dom'

// builds a form to allow the user to create an object for tasks, saves the task to the database
export const TaskForm = () => {
    const {addTask, updateTask, getTaskById, getTasks} = useContext(TaskContext)

    //define the initial state of the from inputs with useState()
    const[task, setTask] = useState({
        task: "",
        dueDate: "yyyy-MM-DD",
        userId: +localStorage.getItem("nutshell_user")
    })
    
    //wait for the data before the button is active
    const [isLoading, setIsLoading] = useState (true)
    const {taskId} = useParams()
    const history= useHistory()

    useEffect(() => {
        getTasks().then(() => {
            if(taskId){
                getTaskById(taskId)
                .then(task => {
                    setTask(task)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
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
        if(taskId) {
            //PUT -update function
            updateTask({
                id: task.id,
                task: task.task,
                dueDate: task.dueDate,
                userId: +localStorage.getItem("nutshell_user")
            })
            .then(() => history.push(`/tasks/form/${task.id}`))
        } else {
            //POST - add function
            task.completed = false
            addTask(task) 
            .then(() => history.push("/tasks"))
        }
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
            disabled={isLoading}
            onClick={event => {
                //prevents the browser from submitting the form
                event.preventDefault()
                handleClickSaveTask()
            }}>
            {taskId?
            <>Save Task</>
            :
            <>Add New Task</>
            }
          </button>
        </form>
        </>
    )



}       







