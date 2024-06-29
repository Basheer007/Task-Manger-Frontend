import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import TodoList from './TodoList'
import axios from 'axios'
import { AppContext } from '../Context/Context'
const Home = () => {

    const [lists, setlists] = useState([])
    const { url, fetchtask } = useContext(AppContext);
    useEffect(() => {
        async function fetchlist() {
            try {
                const result = await axios.get(`${url}/api/task/`);
                setlists([...result.data])
            } catch (error) {
                console.log(error)
            }
        }

        fetchlist()
    }, [fetchtask])
    return (
        <div className='mx-2'>
            <Navbar />
            {lists.map(list => (
                <TodoList todos={list} key={list._id} />
            ))}
        </div>
    )
}

export default Home
