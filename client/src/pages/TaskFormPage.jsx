import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createTask, deleteTask, updateTask, getTask} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'

export function TaskFormPage() {

    const { register, handleSubmit, formState: {
        errors
    },
        setValue
    } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('task updated', {
                position: 'bottom-right',
                style : {
                    background: '#101010',
                    color: '#fff'
                }
            })
        } else {
            await createTask(data)
            toast.success('task successful', {
                position: 'bottom-right',
                style : {
                    background: '#101010',
                    color: '#fff'
                }
            })
        }
        
        navigate('/tasks')
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
            console.log('get data...')
            const res = await getTask(params.id)
            setValue('title', res.data.title)
            setValue('description', res.data.description)
        }
    }
    loadTask()
    }, [params.id, setValue])

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
                        toast.success('deleted task', {
                        position: 'bottom-right',
                        style : {
                        background: '#101010',
                        color: '#fff'
                    }
                    })
                    navigate('/tasks')
                }
            }}>Delete</button>)}
        </div>
    )
}