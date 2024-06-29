import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../Context/Context';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Addtask = () => {
    const [addTaskTitle, setAddTaskTitle] = useState('');
    const [addTaskDesc, setaddTaskDesc] = useState('');
    const { url } = useContext(AppContext);

    async function handleCreateTask(e) {
        e.preventDefault();
        try {
            const result = await axios.post(`${url}/api/task/create`, {
                title: addTaskTitle,
                disc: addTaskDesc
            })
            toast.success('Task created successfully!');
            setAddTaskTitle('')
            setaddTaskDesc('')
        } catch (error) {
            toast.error('Error Creating Task..')
            console.log(error);
        }
    }
    return (
        <div className='min-h-dvh '>
            <header className='h-14 bg-secondary  flex items-center justify-center py-2'>
                <div className='text-center text-2xl font-bold'>
                    Add Task Here!
                </div>
            </header>
            <div className='md:max-w-[50%] mx-auto py-2'>
                <button className='bg-list px-2 py-1 rounded-[5px] text-sliteWhite'><Link to={'/'}>Home</Link></button>
            </div>
            <div className='md:max-w-[50%] mx-auto shadow-md rounded-md shadow-black/30'>
                <form onSubmit={handleCreateTask} className='mt-5 px-2 py-3'>
                    <div className='flex flex-col gap-1 p-2'>
                        <label htmlFor="title" className='text-sliteWhite px-2'>Title</label>
                        <p className='text-[10px] px-2 text-secondary'>Keep your Title Short and sweet</p>
                        <input type="text"
                            value={addTaskTitle}
                            onChange={(e) => setAddTaskTitle(e.target.value)}
                            required={true} placeholder='Enter your Title' className='border-2 text-sliteWhite border-sliteWhite px-3 py-2 outline-none rounded-[20px] text-sm bg-transparent' />
                    </div>
                    <div className='flex flex-col gap-1 p-2'>
                        <label htmlFor="desc" className='text-sliteWhite px-2'>Description..</label>
                        <p className='text-[10px] px-2 text-secondary'>Give description briefly.</p>
                        <textarea id="desc"
                            value={addTaskDesc}
                            onChange={(e) => setaddTaskDesc(e.target.value)}
                            placeholder='Enter your description here..' className='border-2 text-[12px] h-[250px] overflow-y-auto custom-scrollbar text-sliteWhite border-sliteWhite px-3 py-4 outline-none rounded-[20px] bg-transparent'></textarea>
                    </div>
                    <div className='w-full flex py-2 px-2'>
                        <button className='bg-list text-sm text-sliteWhite px-2 py-2 rounded-[8px]'>
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addtask
