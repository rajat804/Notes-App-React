import { useNotes } from "../context/notesContext"
import { NotesCard } from "./notesCard";

export default function Archive() {

    const {archive} = useNotes();

    return (
        <section className="px-4 py-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Archive Notes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
               

                {
                    archive?.length > 0 &&
                    archive.map(({ id, title, text, isPinned }) => (
                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                    ))
                }
            </div>
        </section>
    )
}