import React, { Fragment } from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { useNotes } from '../../context/notes-context'
import { NotesCard } from '../../components/NotesCard/NotesCard'

export const Bin = () => {
    const { title, text, notes, noteDispatch } = useNotes();
    notes.forEach((element) => {
        if (element.isBin === true) {
            element.isArchived = true;
            element.isPinned = false;
            element.isImportant = false;
        }

    })
    const binNotes = notes?.length > 0 && notes.filter(({ isBin }) => isBin);

    return (
        <Fragment>
            <NavBar />
            <main className='flex gap-3'>
                <SideBar />
                <div className="mt-14 ml-10 flex flex-col gap-5 overflow-auto mb-8">
                    {
                        binNotes?.length > 0 && (
                            <div>
                                <h3 className="">Important Notes</h3>
                                <div className="flex flex-wrap gap-6">

                                    {
                                        binNotes?.length > 0 && binNotes.map(({ id, title, text, isBin }) => (
                                            <NotesCard key={id} id={id} title={title} text={text} isBin={isBin} />
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