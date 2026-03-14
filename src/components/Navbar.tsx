"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const aStyle =
    "text-white uppercase font-bold hover:text-gray-300 text-xl cursor-pointer transition-all duration-300";

  return (
    <div className="bg-black md:bg-transparent fixed top-0 left-0 right-0 z-[9999]">
      <div className="max-w-[1680px] flex items-center py-4 text-white uppercase mx-auto px-6 sm:px-10 lg:px-20">
        
        <h1 className="text-2xl font-bold">Navbar</h1>

        {/* Links — visible solo en md+ */}
        <ul className="hidden md:flex gap-10 text-center mx-auto">
          <li className={aStyle}><a href="#home">Home</a></li>
          <li className={aStyle}><a href="#projects">Projects</a></li>
          <li className={aStyle}><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger — visible solo en móvil */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col bg-black/95 px-6 pb-4">
          <li className="py-3 border-b border-white/10">
            <a href="#home" className={aStyle} onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="py-3 border-b border-white/10">
            <a href="#projects" className={aStyle} onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="py-3">
            <a href="#contact" className={aStyle} onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}