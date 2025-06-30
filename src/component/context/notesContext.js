import { createContext, useReducer, useContext } from "react";
import { notesReducers } from "../reducers/notesReducers";

const NotesContext = createContext();

const NotesProvider = ({ children  }) => {
    const initialState = {
        title: "",
        text: "",
        notes: [],
        archive : [],
        bin: []
    };

    const [{ title, text, notes, archive, bin }, notesDispatch] = useReducer(
        notesReducers,
        initialState
    );
    return (
        <NotesContext.Provider value={{ title, text, notes, archive, bin, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes}