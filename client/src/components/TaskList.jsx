import {useEffect, useState} from 'react'
import { getAllTasks } from '../api/tasks.api'

export function TaskList() {

    const [tasks, setTaks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTaks(res.data)
        }
        loadTasks()
    }, [])

    return <div>
        {tasks.map(task => (
            <div key={task.id}>
                <h1>{task.title}</h1>
                <h1>{task.description}</h1>
            </div>
        ))}
        </div>
}