import { useNotes } from "../context/notesContext"
import { findNotesInArchive } from "../utils/findNotesArchive";


export const NotesCard = ({ id, title, text, isPinned, fromBin= false }) => {

  const { notesDispatch , archive} = useNotes();
  const isNotesInArchive = findNotesInArchive(archive, id);


  const onPinClick = (id) => {
    !isPinned ? notesDispatch({
      type: 'PIN',
      payload: { id }
    }) : notesDispatch({
      type: 'UNPIN',
      payload: { id }
    })
  }

  const onArchiveClick = (id) =>{
    !isNotesInArchive ? notesDispatch({
      type: 'ARCHIVE',
      payload: { id }
    }): notesDispatch({
      type: 'REMOVEARCHIVE',
      payload: { id }
    })
  }

  const onDeleteNotes = (id) => {
    notesDispatch({
      type: 'DELETE',
      payload: { id }
    })
  }

  return (
    <div key={id} className="border p-2 rounded shadow-sm bg-gray-50 h-auto">
      <div className="flex justify-between items-center cursor-pointer">
        <h1 className="font-medium text-center text-xl py-1 capitalize">
          {title}
        </h1>
        {
          !fromBin && !isNotesInArchive ?<button className="cursor-pointer" onClick={() => onPinClick(id)}>
          <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
        </button> : <></>
        }
      </div>
      <hr className="my-2" />
      <div className="mt-2 text-gray-600 text-start flex flex-col">
        {text.split(/(?=\d+\.)/).map((line, index) => (
          <span key={index}>{line.trim()}</span>
        ))}
      </div>
      <div className="flex justify-end space-x-3 mt-2 text-gray-500">
        <button onClick={()=> onArchiveClick(id)} className="cursor-pointer text-black" title="Pin">
          <span class={isNotesInArchive ? 'material-icons' : 'material-icons-outlined'}>archive</span>
        </button>
        <button onClick={() => onDeleteNotes(id)} className="cursor-pointer text-black" title="Delete">
          <span className="material-icons-outlined">
            delete
          </span>
        </button>
      </div>
    </div>
  );
};