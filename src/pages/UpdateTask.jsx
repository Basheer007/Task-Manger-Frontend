import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast'
const UpdateTask = () => {
    const { url, Task } = useContext(AppContext);
    const [updateTasktitle, setUpdateTasktitle] = useState('');
    const [updateTaskDesc, setUpdateTaskDesc] = useState('');

    async function updateTasktoDb(e) {
        e.preventDefault();
        try {
            const result = await axios.put(`${url}/api/task/update/${Task._id}`, {
                title: updateTasktitle,
                disc: updateTaskDesc
            })

            toast.success('Task updated..')
            setUpdateTaskDesc('')
            setUpdateTasktitle('');
        } catch (error) {
            console.log(error)
            toast.error('error while updating..')
        }
    }

    useEffect(() => {
        setUpdateTasktitle(Task.title);
        setUpdateTaskDesc(Task.disc);
    }, [])

    return (
        <div className='min-h-dvh '>
            <header className='h-14 bg-secondary  flex items-center justify-center py-2'>
                <div className='text-center text-2xl font-bold'>
                    Update Task Here!
                </div>
            </header>
            <div className='md:max-w-[50%] mx-auto py-2'>
                <button className='bg-list px-2 py-1 rounded-[5px] text-sliteWhite'><Link to={'/'}>Home</Link></button>
            </div>
            <div className='md:max-w-[50%] mx-auto shadow-md rounded-md shadow-black/30'>
                <form onSubmit={updateTasktoDb} className='mt-5 px-2 py-3'>
                    <div className='flex flex-col gap-1 p-2'>
                        <label htmlFor="title" className='text-sliteWhite px-2'> Update Title</label>
                        <p className='text-[10px] px-2 text-secondary'>Keep your Title Short and sweet</p>
                        <input type="text"
                            value={updateTasktitle}
                            onChange={(e) => setUpdateTasktitle(e.target.value)}
                            required={true} placeholder='Enter your Title' className='border-2 text-sliteWhite border-sliteWhite px-3 py-2 outline-none rounded-[20px] text-sm bg-transparent' />
                    </div>
                    <div className='flex flex-col gap-1 p-2'>
                        <label htmlFor="desc" className='text-sliteWhite px-2'> Update Description..</label>
                        <p className='text-[10px] px-2 text-secondary'>Give description briefly.</p>
                        <textarea id="desc"
                            value={updateTaskDesc}
                            onChange={(e) => setUpdateTaskDesc(e.target.value)}
                            placeholder='Enter your description here..' className='border-2 text-[12px] h-[250px] overflow-y-auto custom-scrollbar text-sliteWhite border-sliteWhite px-3 py-4 outline-none rounded-[20px] bg-transparent'></textarea>
                    </div>
                    <div className='w-full flex py-2 px-2'>
                        <button className='bg-list text-sm text-sliteWhite px-2 py-2 rounded-[8px]'>
                            Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateTask
