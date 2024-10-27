import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
    <nav className='w-full fixed z-20'>
        <ul className='flex gap-4 px-4 py-2 my-4 bg-[#1f2838] backdrop-blur-xl w-max rounded-full m-auto text-slate-200'>
          <li>
          <Link href={"/"} className='hover:text-sky-400 active:text-sky-400'>Sobre mi</Link>
          </li>
          <li>
          <Link href={"#proyectos"} className='hover:text-sky-400 active:text-sky-400'>Proyectos</Link>
          </li>
          <li>
          <Link href={"mailto:rodrigogfxs@gmail.com"} className='hover:text-sky-400 active:text-sky-400'>Contactame</Link>
          </li>
          {/* <li>Sobre mi</li>
          <li>proyectos</li>
          <li>Contactame</li> */}
        </ul>
    </nav>
    </>
  )
}

export default Header