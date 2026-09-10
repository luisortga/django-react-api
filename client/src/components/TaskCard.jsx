

export function TaskCard({ task }) {
    return (
        <div style={{background: "#028a6d"}} >
                <h1>{task.title}</h1>
                <p>{task.description}</p>
        </div>
    )
}