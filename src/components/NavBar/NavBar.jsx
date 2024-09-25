import React, { useState, useEffect } from 'react';
import logo from '../../asset/images/logo.png';

export const NavBar = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const formatTime = (date) => {
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return date.toLocaleTimeString(undefined, options);
    };

    return (
        <>
            <header className='flex p-3 gap-4 border-b-2 border-gray-200 items-center h-[10vh]'>
                <div className='w-16 h-16'>
                    <img src={logo} alt="logo" className='w-full h-full' />
                </div>

                <h1 className='text-stone-800 text-5xl font-bold'>Note App</h1>

                <div className='ml-auto text-stone-800 text-xl bg-sky-100 p-2 rounded-lg shadow-md flex gap-2'>
                    <span>{formatDate(dateTime)}</span>
                    <span>    </span>
                    <span>{formatTime(dateTime)}</span>
                </div>
            </header>
        </>
    );
};


