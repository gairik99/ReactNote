import { createContext, useContext, useReducer } from 'react';
import { notesReducer } from '../reducer/notesReducer';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {

    const initialState = {
        title: '',
        text: '',
        notes: [],
    }

    const [{ title, text, notes }, noteDispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{ title, text, notes, noteDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes }