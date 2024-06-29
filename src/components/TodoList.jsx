import React, { useContext } from 'react'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../Context/Context'
import toast from 'react-hot-toast'
const TodoList = ({ todos }) => {
    const { url, setfetchtask,
        fetchtask, setTask } = useContext(AppContext);

    async function deleteList(id) {
        try {
            await axios.delete(`${url}/api/task/delete/${id}`);
            toast.success('Task deleted..')
            setfetchtask(!fetchtask);
        } catch (error) {
            toast.error('Error while deleting')
        }

    }

    function handleUpdateTask(task) {
        setTask(task);
    }

    return (
        <div className='bg-list cursor-pointer text-sliteWhite flex justify-between shadow-md shadow-secondary my-3 md:max-w-[80%] rounded-[7px] mx-auto '>
            <div className='px-2 py-3 rounded-sm flex-1'>
                <h1 className='border-b text-[15px] overflow-clip border-white'>{todos.title}</h1>
                <p className='text-[12px] truncate-multi-line pt-2'>{todos.disc}</p>

                <div className='my-2'>
                    <button
                        onClick={() => handleUpdateTask(todos)}
                        className='text-[12px] shadow-sm shadow-yellow-200/50 px-3 py-1'><Link to='/viewlist'>continue reading..</Link></button>
                </div>
            </div>
            <div className='flex p-2  gap-2 items-start'>
                <button onClick={() => handleUpdateTask(todos)}>
                    <Link to='/updatetask'><PencilSquareIcon className='text-green-400 h-5' /></Link>
                </button>
                <button onClick={() => deleteList(todos._id)}>
                    <TrashIcon className='text-red-600 h-5' />
                </button>
            </div>
        </div>
    )
}

export default TodoList
