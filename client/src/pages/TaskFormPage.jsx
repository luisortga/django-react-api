import {useForm} from 'react-hook-form'
import {createTask, deleteTask} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'

export function TaskFormPage() {

    const { register, handleSubmit, formState: {
        errors
    }, } = useForm()
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    const onSubmit = handleSubmit(async data => {
        await createTask(data)
        navigate('/tasks')
    })

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder="title pending" 
                {...register("title", { required: true })}
                />
                {errors.title && <span>title is required</span>}
                <textarea 
                rows="3" 
                placeholder="description"
                {...register("description", { required: true })}
                ></textarea>
                {errors.description && <span>description is required</span>}

                <button>Save</button>
            </form>

            {params.id && (<button onClick={async () => {
                const accepted = window.confirm('are you sure?')
                if (accepted) {
                    await deleteTask(params.id)
                    navigate('/tasks')
                }
            }}>Delete</button>)}
        </div>
    )
}