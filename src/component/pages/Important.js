// src/component/pages/Important.js

export default function Important() {
    return (
        <section className="px-4 py-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Importante Notes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {[1,2,3,4].map((id) =>(
                    <div key={id} className="bg-white border rounded p-4 shadow-md w-full text-left min-w-0">
                        <h3 className="font-medium text-center">Song List</h3>

                        <ul className="list-decimal pl-6 text-gray-700">
                            <li>song a</li>
                            <li>song b</li>
                        </ul>

                        <div className="flex justify-end space-x-3 mt-2 text-gray-500">
                            <button className="cursor-pointer" title="Pin">📌</button>
                            <button className="cursor-pointer" title="Delete">🗑️</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}