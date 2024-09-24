import React from 'react'
import { useNotes } from '../../context/notes-context'
// {`material-symbols-outlined ${isPinned ? 'text-zinc-950' : ''}`}

export const NotesCard = ({ id, title, text, isPinned, isArchived }) => {
    const { noteDispatch } = useNotes();
    const onPinClick = (id) => {
        noteDispatch({ type: 'PIN', payload: { id } })
    }
    const onArchiveClick = (id) => {
        noteDispatch({ type: 'ARCHIVE', payload: { id } })
    }
    return (
        <div key={id} className='w-80 h-80 border border-neutral-400 rounded-md p-2 '>
            <div className='flex justify-between h-10'>
                <p className='break-words w-72'>{title}</p>
                <button onClick={() => onPinClick(id)}>
                    <span className={`material-symbols-outlined ${isPinned ? 'bg-sky-500' : ''}`}>
                        push_pin
                    </span>
                </button>
            </div>
            <div className='flex flex-col h-60 relative mt-6'>
                <div className='break-words'>{text}</div>
                <div className='ml-auto flex gap-2 absolute bottom-0 right-0'>
                    <button >
                        <span className={`material-symbols-outlined ${isArchived ? 'bg-sky-500' : ''}`} onClick={() => onArchiveClick(id)}>
                            archive
                        </span>
                    </button>
                    <button>
                        <span className="material-symbols-outlined" >
                            delete
                        </span>
                    </button>
                </div>

            </div>
        </div>
    )
}
