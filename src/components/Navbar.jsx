import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');

    setInterval(() => {
        const date = new Date();
        const now = date.toLocaleTimeString();
        setCurrentTime(now);
    }, 400);
    return (
        <nav>
            <h1 className=' py-3 font-bold flex justify-end px-4 text-sliteWhite'>
                {currentTime}
            </h1>
            <div className='bg-secondary flex justify-between items-center px-2 md:px-4 md:max-w-[50%] mx-auto py-3 rounded-sm'>
                <h1 className='text-black text-2xl font-bold'>Task</h1>
                <div>
                    <button className='bg-green-600 px-2 text-sm md:text-xl py-1 rounded-[5px]'><Link to='/addtask'>Add Task</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
