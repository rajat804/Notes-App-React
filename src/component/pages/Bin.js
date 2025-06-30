// src/component/pages/Bin.js
import { NotesCard } from "./notesCard";
import { useNotes } from "../context/notesContext";
export default function Bin() {

    const {bin} = useNotes()

    return (
        <section className="px-4 py-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Bin Notes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {
                    bin?.length > 0
                        ? bin.map(({ id, title, text, isPinned }) => (
                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} fromBin={true}/>
                        ))
                        : <p className="text-gray-500">No deleted notes</p>
                }
            </div>
        </section>
    );
}
