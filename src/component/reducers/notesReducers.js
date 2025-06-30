import { v4 as uuid } from "uuid";
export const notesReducers = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADDNOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { text: state.text, title: state.title, id: uuid(), isPinned: false },
        ],
      };
    case "CLEARINPUTS":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };
      case "UNPIN":
        return {
          ...state,
          notes: state.notes.map(note =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
        }
        case "ARCHIVE":
          return {
            ...state,
            archive: [...state.archive, state.notes.find(({id}) => id === payload.id)],
            notes: state.notes.filter(({id}) => id !== payload.id)
          }
          case "REMOVEARCHIVE": 
          return {
            ...state,
            notes: [...state.notes, state.archive.find(({id}) => id === payload.id)],
            archive: state.archive.filter(({ id }) => id !== payload.id)
          }
          case "DELETE":
            const deleteNotes = state.notes.find(({id} ) => id === payload.id) || state.archive.find(({id}) => id === payload.id); 
          return {
            ...state,
            notes: state.notes.filter(({id})  => id !== payload.id),
            archive: state.archive.filter(({id}) => id !== payload.id),
            bin: [...state.bin , deleteNotes] 
          }
    default:
      return state;
  }
};