import React from 'react'
import Link from 'next/link';
import { BiSolidHome } from "react-icons/bi";
import { PiUserListFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa6";

function Botones() {
  return (
    <div className='hidden xl:fixed xl:top-4 xl:right-28 xl:h-screen xl:flex xl:items-center'>
        <div className='flex flex-col gap-4'>
            <div className='p-4 bg-slate-200 hover:bg-[#479ec1] rounded-full'>
                <Link href={"/"} className='text-4xl text-[#0e0e0e] hover:text-slate-100'>
                <span>
                <BiSolidHome />
                </span>
                </Link>
            </div>
            <div className='p-4 bg-slate-200 hover:bg-[#479ec1] rounded-full'>
                <Link href={"#about"} className='text-4xl text-[#0e0e0e] hover:text-slate-100'>
                <span>
                <PiUserListFill />
                </span>
                </Link>
            </div>
            <div className='p-4 bg-slate-200 hover:bg-[#479ec1] rounded-full'>
                <Link href={"#proyectos"} className='text-3xl  text-[#0e0e0e] hover:text-slate-100'>
                <span>
                <FaBriefcase />
                </span>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Botones