import { useState } from "react"

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)
  

  const toggleMenu = () => setIsOpen(!isOpen)
  
    return (
        <nav className="flex drop-shadow-md bg-slate-100 text-zinc-950  w-full justify-between items-center ">
          <a className="text-2xl font-bold text-gray-700 flex items-center p-6">
            Analisando candidatos
          </a>
          <div className="hidden md:flex md:items-center md:space-x-4 text-gray-700 text-base">
          <a href="#">Prefeitos</a>
          <a href="#">Vereadores</a>
          <a href="#">Deputado Estadual</a>
          <a href="#">Deputado Federal</a>
          <a href="#">Governadores</a>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2  text-gray-700"
          onClick={toggleMenu}
        >
          <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-2xl`}></i>
        </button>
        <div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 mt-2 bg-slate-100 border border-gray-200 shadow-lg rounded-md w-48`}
        >
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Prefeito</a>
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Vereadores</a>
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Deputado estadual</a>
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Deputado federal</a>
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Governadores</a>
        </div>
      </nav>
    )
}