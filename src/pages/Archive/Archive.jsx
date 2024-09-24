import React, { Fragment } from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { useNotes } from '../../context/notes-context'
import { NotesCard } from '../../components/NotesCard/NotesCard'

export const Archive = () => {
    const { title, text, notes, noteDispatch } = useNotes();
    const archivedNotes = notes?.length > 0 && notes.filter(({ isArchived, isPinned }) => isArchived && !isPinned);
    return (
        <Fragment>
            <NavBar />
            <main className='flex gap-3'>
                <SideBar />
                <div className="mt-14 ml-10 flex flex-col gap-5">
                    {
                        archivedNotes?.length > 0 && (
                            <div>
                                <h3 className="">Archived Notes</h3>
                                <div className="flex flex-wrap gap-6">

                                    {
                                        archivedNotes?.length > 0 && archivedNotes.map(({ id, title, text, isArchived }) => (
                                            <NotesCard key={id} id={id} title={title} text={text} isArchived={isArchived} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

            </main>

        </Fragment>
    )
}
