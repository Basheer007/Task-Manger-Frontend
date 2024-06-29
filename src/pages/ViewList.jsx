import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import phots from '../assets/photos.jpg'
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { AppContext } from '../Context/Context';
const ViewList = () => {
    const { Task, url } = useContext(AppContext);
    const [imgUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const iamgeGen = ['Abstract Art', 'Nature', 'Minimalist Background', 'Workspace', 'Inspirational Quotes'];
    function randomImageGen() {
        let result = iamgeGen[Math.floor(Math.random() * iamgeGen.length)];
        return result;
    }

    // random number gen for
    function randomNum() {
        let result = Math.floor(Math.random() * 10 + 1);
        return result;
    }
    const Api_url = `https://api.unsplash.com/search/photos?page=1&query=${randomImageGen()}`


    useEffect(() => {
        async function fetchbyid() {
            try {
                const result = await axios.get(`${url}/api/task/${Task._id}`);
                setTitle(result.data.title);
                setDesc(result.data.disc)
                fetchImage()
            } catch (error) {
                console.log(error)
            }
        }
        fetchbyid();
    }, [])



    // image generator form unsplash
    async function fetchImage() {
        try {
            const data = await axios.get(`${Api_url}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
            if (data) {
                const result = data.data.results[randomNum()]
                setImageUrl(result.urls.regular)// This will log the first relevant photo
            } else {
                console.log('No results found.');
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className='min-h-dvh bg-list flex flex-col md:flex-row container mx-auto'>
            <div className='h-[10rem] bg-red-400 w-full md:h-[90%] rounded-[10px] relative'>
                <img src={imgUrl ? imgUrl : phots} alt="imageUrl" className='w-full h-full object-cover rounded-[10px]' />
                <div className='absolute top-4 left-4'>
                    <Link to='/'><ArrowLeftIcon className='h-6 bg-secondary p-1 rounded-full' /></Link>
                </div>
            </div>
            <div className='h-[30rem]  md:h-[full] md:shadow-none  flex flex-col gap-4 px-2 py-2 bg-list w-full rounded-t-[10px] relative -top-2  shadow-md shadow-black'>
                <div>
                    <h1 className='text-sm  text-sliteWhite'>
                        Title :
                    </h1>
                    <h1 className='text-2xl py-2 border-b border-secondary font-bold text-sliteWhite'>
                        {title}
                    </h1>
                </div>
                <div>
                    <h1 className='text-sm mb-3  text-sliteWhite'>
                        Description :
                    </h1>
                    <h1 className='text-sm  text-sliteWhite'>
                        {desc}
                    </h1>
                </div>
            </div>

        </section>
    )
}

export default ViewList
