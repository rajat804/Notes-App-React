// src/component/pages/Home.js

import { NotesCard } from "./notesCard";
import { useNotes } from "../context/notesContext";
// import { notesReducers } from "../reducers/notesReducers";
export default function Home() {

    const { title, text, archive, notesDispatch, notes } = useNotes();
    const onTitleChange = (e) => {
        notesDispatch({
            type: "TITLE",
            payload: e.target.value,
        });
    };
    const onTextChange = (e) => {
        notesDispatch({
            type: "TEXT",
            payload: e.target.value,
        });
    };
    const onAddClick = () => {

        if (!title.trim() || !text.trim()) {
            alert('Please fill Title and Text');
            return;
        }

        notesDispatch({
            type: "ADDNOTE",
        });
        notesDispatch({
            type: "CLEARINPUTS",
        });
    };

    // console.log(notes);
    console.log(archive);
    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);


    return (
        // Main Content
        <main className="flex-1 p-6">
            {/* Note Input */}
            <div className="mb-6 flex justify-center">
                <div className="bg-gray-100 rounded p-4 shadow-md max-w-xl">
                    <input
                        value={title}
                        onChange={onTitleChange}
                        type="text"
                        placeholder="Enter Title"
                        className="w-full mb-2 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <textarea
                        value={text}
                        onChange={onTextChange}
                        placeholder="Enter note"
                        rows="4"
                        className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={onAddClick}
                            className="bg-blue-600  hover:bg-blue-700 text-white py-2 px-4 rounded shadow flex items-center cursor-pointer"
                        >
                            <span className="pe-1">➤</span> Send
                        </button>
                    </div>
                </div>
            </div>

            {/* Other Notes */}
            <section>
                {
                    pinnedNotes?.length > 0 && <h3  className="text-xl font-semibold mb-4">Pinned Notes</h3>
                }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full items-start">
                    {/* <h3>Pinned Notes</h3> */}
                    {pinnedNotes?.length > 0 &&
                        pinnedNotes.map(({ id, title, text, isPinned }) => (
                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                        ))}
                </div>
                {
                    otherNotes?.length > 0 && <h3  className="text-xl font-semibold mb-4">Other Notes</h3>
                }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full items-start">
                    {otherNotes?.length > 0 &&
                        otherNotes.map(({ id, title, text, isPinned }) => (
                            <NotesCard key={id} id={id} title={title} text={text} ispinned={isPinned} />
                        ))}
                </div>
            </section>

        </main>
    );
}
