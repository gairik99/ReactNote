import React, { Fragment } from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { useNotes } from '../../context/notes-context'
import { NotesCard } from '../../components/NotesCard/NotesCard'

export const Important = () => {
    const { title, text, notes, noteDispatch } = useNotes();
    notes.forEach((element) => {
        if (element.isImportant === true) {
            element.isArchived = false;
            element.isPinned = false;
        }

    })
    const importantNotes = notes?.length > 0 && notes.filter(({ isImportant }) => isImportant);

    return (
        <Fragment>
            <NavBar />
            <main className='flex gap-3'>
                <SideBar />
                <div className="mt-14 ml-10 flex flex-col gap-5 overflow-auto mb-8">
                    {
                        importantNotes?.length > 0 && (
                            <div>
                                <h3 className="">Important Notes</h3>
                                <div className="flex flex-wrap gap-6">

                                    {
                                        importantNotes?.length > 0 && importantNotes.map(({ id, title, text, isImportant }) => (
                                            <NotesCard key={id} id={id} title={title} text={text} isImportant={isImportant} />
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