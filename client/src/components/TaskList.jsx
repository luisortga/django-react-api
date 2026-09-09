import {useEffect} from 'react'

export function TaskList() {

    useEffect(() => {
        console.log('page load')
    }, [])

    return (
        <div>TaskList</div>
    )
}