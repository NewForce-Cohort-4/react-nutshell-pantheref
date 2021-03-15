//imports the main react library and two functions that are exports
import React, {useState, createContext} from "react"

//the context is imported and used by individual components that need data 
//context stores a certain kind of data to be used in the application
//if you create a dataprovider then you ened a createContext
export const TaskContext = createContext()

//this component establishes what data can be used
export const TaskProvider = (props) => {
    //tasks is the variable given, it holds the state of the component
    //setTasks is the function to update the variable
    //the useState hook will hold and set the array of tasks
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        const userID = localStorage.getItem("nutshell_user")
        return fetch(`http://localhost:8088/tasks?userId=${userID}`)
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = taskObj => {
        return fetch(`http://localhost:8088/tasks`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(response => response.json())
        .then(getTasks)
    }
    
    const updateTask = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: true})
        })
        .then(res=>res.json())
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
        .then(res=>res.json())
    }


    const editTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(getTasks)
    }

    //task provider returns a context provider which has 'tasks' state, 'getTasks' function, 'addTask' function, 'getTaskById' function, 'deleteTask' function and 'editTask' function  all passed in as keys, this allows any child element to access them
    return(
        //what we are actually exporting
        <TaskContext.Provider value={{
            //the state and functions other components can use
            tasks, getTasks, addTask, getTaskById, updateTask, editTask 

        }}>
            {props.children}
        </TaskContext.Provider>
    )

}