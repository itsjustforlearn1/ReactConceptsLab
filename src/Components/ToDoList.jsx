import React from 'react'
import { useState } from 'react'

export default function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newtask, setNewtask] = useState("")

    function handleInputChange(event) {
        setNewtask(event.target.value)

    }
    function handleAddTask() {
        if (newtask.trim() !== "") {
            setTasks(t => [...t, newtask])
            setNewtask("")
        }
    }
    function handleDeleteTask(index) {
        const updateTask = tasks.filter((_, i) => i !== index)
        setTasks(updateTask)
    }
    function handleMoveUp(index) {
    if (index > 0) { 
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks]; 
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            return updatedTasks;
        });
    }
}

function handleMoveDown(index) {
    if (index < tasks.length - 1) { 
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks]; 
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            return updatedTasks;
        });
    }
}
    return (

        <div>
            <h1>To-Do-List</h1>
            <input type="text"
                placeholder='Enter task ...'
                value={newtask}
                onChange={handleInputChange} />
            <button onClick={handleAddTask}>Add Task</button>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => handleDeleteTask(index)}>
                            Delete
                        </button>
                        <button onClick={() => handleMoveUp(index)}>
                            Up
                        </button>
                        <button onClick={() => handleMoveDown(index)}>
                            Down
                        </button>

                    </li>)}
            </ol>
        </div>
    )
}
