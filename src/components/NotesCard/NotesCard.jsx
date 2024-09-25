import React from 'react'
import { useNotes } from '../../context/notes-context'
// {`material-symbols-outlined ${isPinned ? 'text-zinc-950' : ''}`}

export const NotesCard = ({ id, title, text, isPinned, isArchived, isImportant, isBin }) => {
    const { noteDispatch, notes } = useNotes();
    const onPinClick = (id) => {
        noteDispatch({ type: 'PIN', payload: { id } })
    }
    const onArchiveClick = (id) => {
        noteDispatch({ type: 'ARCHIVE', payload: { id } })
    }
    const onImportantClick = (id) => {
        noteDispatch({ type: 'IMPORTANT', payload: { id } })
    }


    const onBinClick = (id) => {
        const found = notes.find(note => note.id === id)
        if (found.isBin === false)
            noteDispatch({ type: 'ADD_BIN', payload: { id } })
        else {
            noteDispatch({ type: 'DELETE_BIN', payload: { id } })
        }
    }


    return (
        <div key={id} className='w-80 h-80 border border-neutral-400 rounded-md p-2 '>
            <div className='flex justify-between h-10'>
                <p className='break-words w-72'>{title}</p>
                <button onClick={() => onPinClick(id)}>
                    <span className={`material-symbols-outlined ${isPinned ? 'text-sky-400' : ''}`}>
                        push_pin
                    </span>
                </button>
            </div>
            <div className='flex flex-col h-60 relative mt-6'>
                <div className='break-words'>{text}</div>
                <div className='ml-auto flex gap-2 absolute bottom-0 right-0'>
                    <button onClick={() => onArchiveClick(id)}>
                        <span className={`material-symbols-outlined ${isArchived ? 'text-sky-400' : ''}`} >
                            archive
                        </span>
                    </button>
                    <button onClick={() => onBinClick(id)}>
                        <span className={`material-symbols-outlined ${isBin ? 'text-sky-400' : ''}`} >
                            delete
                        </span>
                    </button>
                    <button onClick={() => onImportantClick(id)}>
                        <span className={`material-symbols-outlined ${isImportant ? 'text-sky-400' : ''}`} >
                            label_important
                        </span>
                    </button>
                </div>

            </div>
        </div>
    )
}
