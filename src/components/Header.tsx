"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/logopng.png"
import menu from "../../public/image/menu.png"
import { GrSend } from "react-icons/gr";
import { CgBriefcase } from "react-icons/cg";
function Header() {
    const [abrirmenu, setAbrirmenu] = useState(false)

    const abrirElMenu = () => {
    setAbrirmenu(!abrirmenu)
}

console.log(abrirElMenu)
  return (
    <header>
      <nav className="p-3 py-5 max-w-screen-xl m-auto flex flex-row justify-between items-center">
        <Image
          src={logo}
          alt="Logo Adolf.dev"
          className="w-[180px] h-[2rem] object-contain"
        />
        
        <Image
          src={menu}
          alt="Logo Adolf.dev"
          className="w-[40px] md:hidden "
          onClick={abrirElMenu}
        />
        <ul className="md:flex md:gap-10 hidden">
          <li>
            <Link className="text-white text-2xl md:cursor-pointer hover:text-teal-400" href={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="text-white text-2xl md:cursor-pointer hover:text-teal-400" href={"/about"}>
              Acerca de
            </Link>
          </li>
          <li>
            <Link className="text-white text-2xl md:cursor-pointer hover:text-teal-400" href={"/contact"}>
              Contactame
            </Link>
          </li>
        </ul>
      </nav>
      {abrirmenu && (
      <ul className="flex flex-col jus w-full text-left gap-4  p-4 rounded-bl-xl rounded-br-xl shadow  absolute bottom-0 top-[5rem] bg-[#0e0e0e]">
          <li>
            <Link className="text-white text-2xl md:cursor-pointer hover:text-teal-400" href={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="text-white text-2xl md:cursor-pointer hover:text-teal-400" href={"/about"}>
              Acerca de
            </Link>
          </li>
          <li className="grid grid-cols-2 items-center gap-4 mt-4">
            <Link className="text-white gap-1 text-[1.1rem] justify-center flex items-center md:cursor-pointer  p-3  bg-[#316275] rounded-lg hover:text-teal-400" href={"/contact"}>
              <GrSend /> Contactame
            </Link>
            <Link className="text-white gap-1 text-[1.1rem] justify-center flex items-center md:cursor-pointer  p-3  bg-[#316275] rounded-lg hover:text-teal-400" href={"/contact"}>
              <CgBriefcase /> Proyectos
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
