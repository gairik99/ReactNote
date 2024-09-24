import React, { Fragment } from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { NotesCard } from '../../components/NotesCard/NotesCard'
import { useNotes } from '../../context/notes-context'

export const Home = () => {
    const { title, text, notes, noteDispatch } = useNotes();

    const onTitleChange = (e) => {
        noteDispatch({ type: 'TITLE', payload: e.target.value });
        e.target.value = '';
    }
    const onTextChange = (e) => {
        noteDispatch({ type: 'TEXT', payload: e.target.value });
        e.target.value = '';
    }
    const onAddClick = () => {
        noteDispatch({
            type: 'ADD_NOTE'
        })
        noteDispatch({ type: 'CLEAR' })
    }
    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
    return (
        <Fragment>
            <NavBar />
            <main className='flex gap-3'>
                <SideBar />
                <div className="flex flex-col w-screen mt-7">
                    <div className='flex flex-col gap w-96 self-center relative '>
                        <input type="text" placeholder='Enter Title..' value={title} onChange={onTitleChange} className='border border-neutral-400 rounded-sm focus:outline-none border-b-0 p-2' />
                        <textarea name="" id="" placeholder='Enter Your Note..' value={text} onChange={onTextChange} className='border border-neutral-400 rounded-sm focus:outline-none border-t-0 p-2'></textarea>
                        <button className='absolute bottom-0 right-0 ' disabled={title.length === 0 && text.length === 0} onClick={onAddClick}>
                            <span className="material-symbols-outlined bg-sky-500 m-1 p-1 text-slate-200 rounded-md" >
                                add_box
                            </span>
                        </button>
                    </div>
                    <div className="mt-14 ml-10 flex flex-col gap-5">
                        {
                            pinnedNotes?.length > 0 && (
                                <div>
                                    <h3 className="">Pinned Notes</h3>
                                    <div className="flex flex-wrap gap-6">

                                        {
                                            pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => (
                                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                        <div>
                            {
                                otherNotes?.length > 0 && <h3>Other Notes</h3>
                            }
                            <div className="flex flex-wrap gap-6">

                                {
                                    otherNotes?.length > 0 && otherNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </Fragment>

    )
}
