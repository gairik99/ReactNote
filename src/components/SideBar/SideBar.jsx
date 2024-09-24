import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
    const getStyle = ({ isActive }) => isActive ? `flex align-center gap-2 bg-sky-500 rounded-tr-full rounded-br-full text-slate-200 p-3` : `flex align-center gap-2 hover:bg-sky-500 hover:text-slate-200 rounded-tr-full rounded-br-full p-3 `
    return (
        <aside className='flex flex-col gap-4 border-r-2 border-gray-200 w-[160px] h-screen p-3'>
            <NavLink className={getStyle} to='/'>
                <span className="material-symbols-outlined ">
                    home
                </span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyle} to='/archive'>
                <span className="material-symbols-outlined">
                    archive
                </span>
                <span>Archive</span>
            </NavLink>
            <NavLink className={getStyle} to='/important'>
                <span className="material-symbols-outlined">
                    label_important
                </span>
                <span>Important</span>
            </NavLink>
            <NavLink className={getStyle} to='/bin'>
                <span className="material-symbols-outlined">
                    delete
                </span>
                <span>Bin</span>
            </NavLink>
        </aside>
    )
}
