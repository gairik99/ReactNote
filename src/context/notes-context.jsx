import { createContext, useContext, useReducer, useEffect } from 'react';
import { notesReducer } from '../reducer/notesReducer';

const init = () => {
    const savedState = localStorage.getItem('notesState');
    return savedState ? JSON.parse(savedState) : {
        title: '',
        text: '',
        notes: [],
    };
};

const NotesContext = createContext();

const NotesProvider = ({ children }) => {

    const initialState = {
        title: '',
        text: '',
        notes: [],
    };

    const [state, noteDispatch] = useReducer(notesReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('notesState', JSON.stringify(state));
    }, [state]);

    return (
        <NotesContext.Provider value={{ ...state, noteDispatch }}>
            {children}
        </NotesContext.Provider>
    );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };