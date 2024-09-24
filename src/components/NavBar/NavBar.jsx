import React from 'react'
import logo from '../../asset/images/logo.png'


export const NavBar = () => {
    return (
        <>
            <header className='flex p-3 gap-4 border-b-2 border-gray-200'>
                <div className='h-16 w-16'>
                    <img src={logo} alt="logo" className='w-full h-full' />
                </div>

                <h1 className='text-stone-800 text-5xl font-bold'>Note App</h1>
            </header>
        </>
    )
}


