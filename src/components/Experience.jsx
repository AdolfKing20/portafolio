import React from 'react'
import { FaGithub, FaCss3Alt, FaDatabase  } from "react-icons/fa6";
import { FaLinkedin, FaHtml5, FaLocationArrow } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript   } from "react-icons/si";
import { TbBrandNextjs, TbTargetArrow  } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
function Experience() {
  return (
    <>
    <section className=" px-4 md:px-16 md:flex  md:items-center gap-4 text-[#fdfdfd] relative" id="about">


<section>
  

  <div className="flex flex-col gap-4 mt-8 md:m-0 flex-1">
  <h2 className="text-xl md:text-3xl text-sky-200 font-bold uppercase">Experiencia</h2>
  <ul className="flex flex-col gap-6">



    <li className="relative">
      <div className="before:w-3 before:h-3 before:rounded-full before:top-0 before:bg-sky-600 before:absolute before:left-1 pl-6 after:absolute after:left-2 after:top-3 after:h-[125%] after:bg-sky-800 after:w-1">
        <time className="mb-1 text-sm font-normal leading-none text-sixth opacity-50">
          27 de febrero del 2023
        </time>
        <h3 className="font-semibold text-quin">Comienzo y aprendizaje</h3>
        <p className="mb-4 text-sm font-normal text-sixth opacity-75">Me inscribi en el curso de diplomatura en iniciación al desarollo web, donde aprendi... </p>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-orange-500 text-xl md:text-2xl"> <FaHtml5 /> </span>
            <span className="uppercase font-medium text-sm">Html</span>
          </div>
          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-sky-500 text-xl md:text-2xl"> <FaCss3Alt /> </span>
            <span className="uppercase font-medium text-sm">css</span>
          </div>
          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-yellow-400 text-xl md:text-2xl"> <SiJavascript /> </span>
            <span className="uppercase font-medium text-sm">JavaScript</span>
          </div>
          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-slate-400 text-xl md:text-2xl"> <GrMysql /> </span>
            <span className="uppercase font-medium text-sm">My Sql</span>
          </div>

        </div>
      </div>
    </li>



    <li className="relative">
      <div className="before:w-3 before:h-3 before:rounded-full before:top-0 before:bg-sky-600 before:absolute before:left-1 pl-6 after:absolute after:left-2 after:top-3 after:h-[125%] after:bg-sky-800 after:w-1">
        <time className="mb-1 text-sm font-normal leading-none text-sixth opacity-50">
          07 de agosto del 2023
        </time>
        <h3 className="font-semibold text-quin">Nuevo comienzo</h3>
        <p className="mb-4 text-sm font-normal text-sixth opacity-75"> Me volvi a inscribir en otro curso diferente donde pude aprender a manejar nuevas habilidades como desarrollador web </p>
        <div className="grid grid-cols-2 gap-4 w-full">

          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-2xl md:text-2xl"> <TbBrandNextjs /> </span>
            <span className="uppercase font-medium text-sm">Next Js</span>
          </div>

          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-sky-500 text-xl md:text-2xl"> <SiTailwindcss  /> </span>
            <span className="uppercase font-medium text-sm">Tailwind</span>
          </div>

          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-sky-500 text-lg md:text-2xl"> <FaDatabase   /> </span>
            <span className="uppercase font-medium text-sm">Data Base</span>
          </div>

          <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 w-full">
            <span className="text-sky-500 text-lg md:text-2xl"> <SiTypescript    /> </span>
            <span className="uppercase font-medium text-sm">TypeScript</span>
          </div>
        </div>
      </div>
    </li>


    <li className="relative">
      <div className="before:w-3 before:h-3 before:rounded-full before:top-0 before:bg-sky-600 before:absolute before:left-1 pl-6 after:absolute after:left-2 after:top-3 after:h-[100%] after:bg-sky-800 after:w-1">
        <time className="mb-1 text-sm font-normal leading-none text-sixth opacity-50">
          07 de diciembre del 2023
        </time>
        <h3 className="font-semibold text-quin">Actualmente</h3>
        <p className="mb-4 text-sm font-normal text-sixth opacity-75"> Consegui mi primer trabajo como desarrollador freelance, y sigo aprendiendo nuevas habidades </p>

      </div>
    </li>
  </ul>
</div>
</section>
</section>
    </>
  )
}

export default Experience