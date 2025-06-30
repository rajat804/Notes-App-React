// src/component/header.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Important from './pages/Important';
import Bin from './pages/Bin';

export const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <BrowserRouter>
            <div className="flex min-h-screen">
                <button onClick={()=> setIsOpen(!isOpen)} className='sm-height md:hidden px-3 py-2 text-lg bg-blue-600 text-white text-base cursor-pointer'>☰</button>
                {/* sidebar */}
                <aside className={`w-64 bg-white border-r h-screen fixed p-4 md:static z-10 top-0 left-0 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                    {/* close button  */}
                    <button onClick={()=> setIsOpen(false)} className='md:hidden absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-white bg-blue-600 hover:bg-red-600 rounded-full shadow text-xl cursor-pointer'><span className='mb-1'>×</span></button>
                    <h1 className="text-2xl font-bold text-blue-600 mb-8">Hyper Notes</h1>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/" className="flex items-center space-x-2 text-blue-600 font-semibold px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition">
                                <span className='material-icons'>home</span><span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/archive" className="flex items-center space-x-2 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition">
                                <span className='material-icons'>archive</span> <span>Archive</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/important" className="flex items-center space-x-2 text-gray-700 px-3 py-2 rounded-lg hover:bg-yellow-100 hover:text-yellow-800 transition">
                                <span className='material-icons'>label_important</span><span>Important</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/bin" className="flex items-center space-x-2 text-gray-700 px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-800 transition">
                                <span className='material-icons'>delete</span> <span>Bin</span>
                            </Link>
                        </li>
                    </ul>
                </aside>
                {/* pages content */}
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/archive' element={<Archive/>}></Route>
                    <Route path='/important' element={<Important/>}></Route>
                    <Route path='/bin' element={<Bin/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )

}