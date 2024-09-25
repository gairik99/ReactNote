import { v4 as uuid } from "uuid"

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE':
            return { ...state, title: payload }
        case 'TEXT':
            return { ...state, text: payload }
        case 'ADD_NOTE':
            return {
                ...state, notes: [...state.notes, { id: uuid(), title: state.title, text: state.text, isPinned: false, isArchived: false, isImportant: false }]
            }
        case 'CLEAR':
            return {
                ...state, title: '', text: ''
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? {
                    ...note, isPinned: !note.isPinned
                } : note)
            }
        case 'ARCHIVE':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? {
                    ...note, isArchived: !note.isArchived
                } : note)
            }
        case 'IMPORTANT':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? {
                    ...note, isImportant: !note.isImportant
                } : note)
            }

        default:
            return state;
    }
}