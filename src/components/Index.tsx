"use client"

import Image from "next/image";
import yo from "../../public/image/yo.jpg";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaCss3Alt, FaDatabase  } from "react-icons/fa6";
import { FaLinkedin, FaHtml5, FaLocationArrow } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript   } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs, TbTargetArrow  } from "react-icons/tb";
function Index() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <section className="flex flex-col md:flex-row md:items-center justify-center md:m-auto md:gap-5 h-screen" id="home">
        <Image src={yo} alt="FOto de AdolfDev" className="md:w-1/2" />

        <div className="flex flex-col items-center md:w-1/2">
          <h1 className="text-[#fdfdfd] text-3xl md:text-6xl uppercase font-bold ">
            Frontend
          </h1>
          <h2 className="text-[#3f8ba9] font-light text-[1.2rem] md:text-3xl uppercase">
            Developer
          </h2>
          <div className="flex flex-col gap-4   items-center mt-5">
            <Link
              href={"#about"}
              className="px-16  py-3  text-[#fdfdfd] font-light uppercase border border-[#479ec1] rounded-xl hover:bg-[#479ec1]"
            >
              Sobre mi
            </Link>
            <div className="flex gap-4">
              <Link
                href={"https://github.com/AdolfKing20"}
                className="text-white text-4xl hover:text-[#479ec1] "
              >
                <span>
                  <FaGithub />
                </span>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/rodrigo-gimenez-83122a26b/"}
                className="text-white text-4xl hover:text-[#479ec1] "
              >
                <span>
                  <FaLinkedin />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="md:h-screen  px-4 md:flex  md:items-center gap-4 text-[#fdfdfd] relative before:absolute before:w-96 before:h-96 before:bg-gray-400/20 before:blur-3xl before:top-4 before:left-[-8rem] before:rounded-full

      after:absolute after:w-96 after:h-52 after:bg-cyan-400/20 after:blur-3xl after:bottom-4 after:right-[-10rem] after:rounded-full" id="about">


        <section className="flex flex-col md:flex-row gap-4 bg-slate-200/5 backdrop-blur py-8 px-4 md:p-8 rounded-3xl ">
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative">
              <h2 className="text-2xl font-bold uppercase text-[#479ec1] pb-1 before:absolute before:h-1 before:w-14 before:bg-gray-100 before:bottom-0 before:rounded-3xl before:left-1">
                Sobre Mi
              </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-xl">Soy un Desarrollador Frontend con experiencia intermedia en diversas tecnologías frontend, complementada con conocimientos básicos en el ámbito del backend. Mi enfoque como autodidacta me impulsa constantemente a explorar nuevas oportunidades de aprendizaje, perfeccionando así mis habilidades como programador. Estoy comprometido con la evolución continua, siempre en busca de desafíos que amplíen mis conocimientos y contribuyan al desarrollo de soluciones innovadoras.</p>

          </div>

          <div className="flex flex-col gap-4 mt-8 md:m-0 flex-1">
          <h2 className="text-xl text-gray-400 font-bold uppercase">Experiencia</h2>
          <ul className="flex flex-col gap-6">



            <li className="relative">
              <div className="before:w-3 before:h-3 before:rounded-full before:top-0 before:bg-[#0c1f26] before:absolute before:left-1 pl-6 after:absolute after:left-2 after:top-3 after:h-[125%] after:bg-[#0c1f26] after:w-1">
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
              <div className="before:w-3 before:h-3 before:rounded-full before:top-0 before:bg-[#0c1f26] before:absolute before:left-1 pl-6 after:absolute after:left-2 after:top-3 after:h-[125%] after:bg-[#0c1f26] after:w-1">
                <time className="mb-1 text-sm font-normal leading-none text-sixth opacity-50">
                  07 de agosto del 2023
                </time>
                <h3 className="font-semibold text-quin">Nuevo comienzo</h3>
                <p className="mb-4 text-sm font-normal text-sixth opacity-75"> Me volvi a inscribir en otro curso diferente donde pude aprender a manejar nuevas habilidades como desarollador web </p>
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
              <div className="before:w-3 before:h-3 before:rounded-full before:top-0 before:bg-[#0c1f26] before:absolute before:left-1 pl-6 after:absolute after:left-2 after:top-3 after:h-[100%] after:bg-[#0c1f26] after:w-1">
                <time className="mb-1 text-sm font-normal leading-none text-sixth opacity-50">
                  07 de diciembre del 2023
                </time>
                <h3 className="font-semibold text-quin">Actualmente</h3>
                <p className="mb-4 text-sm font-normal text-sixth opacity-75"> Consegui mi primer trabajo como desarollador, y sigo aprendiendo nuevas habidades </p>

              </div>
            </li>
          </ul>
        </div>
        </section>
      </section>






        <section className="h-screen w-full px-4 flex  items-center relative before:absolute before:h-96 before:top-0 before:left-[-10rem] before:bg-cyan-600/5 before:w-96 before:rounded-full before:blur-3xl
        
        after:absolute after:h-96 after:bottom-0 after:right-[-13rem] after:bg-slate-100/5 after:w-96 after:rounded-full after:blur-3xl" id="proyectos">
          <div className="w-full">
            <div className="relative">
              <h2 className="text-white text-3xl font-bold before:absolute before:w-2 before:h-2 before:rounded-full before:bg-sky-500 before:bottom-[.5rem] before:left-[9.28rem]">Proyectos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

              {/* card */}


              <Link href={"https://tienda-shopix-utn.vercel.app/"} target="_blank" className="block relative group border-2 border-gray-700 hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1 text-gray-200 " onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
    <span className={`text-gray-500 text-2xl  absolute right-4 top-3 transition-all ${
      hovered ? 'block' : 'hidden'
    }`}>
    <TbTargetArrow  />
    </span>
                <div className="px-6 py-6">
                  <h3 className="text-slate-200"> Tienda Shopix</h3>
                  <p className="text-slate-400">Emulacion de tienda web</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2">
                      <span className="text-2xl md:text-2xl"> <TbBrandNextjs /> </span>
                      <span className="uppercase font-medium text-sm">Next Js</span>
                    </div>

                    <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 ">
                      <span className="text-sky-500 text-lg md:text-2xl"> <FaDatabase   /> </span>
                      <span className="uppercase font-medium text-sm">Data Base</span>
                    </div>

                    <div className="flex bg-gray-800 md:px-3 items-center py-2 px-2 md:py-2 rounded-2xl gap-2">
                      <span className="text-sky-500 text-xl"> <SiTypescript    /> </span>
                      <span className="uppercase font-medium text-sm">TypeScript</span>
                    </div>
                  </div>
                </div>
              </Link>


              {/* Fin card */}
              {/* card */}


              <Link href={"https://netflow.vercel.app/"} target="_blank" className="block relative group border-2 border-gray-700 hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1 text-gray-200 " onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
    <span className={`text-gray-500 text-2xl  absolute right-4 top-3 transition-all ${
      hovered ? 'block' : 'hidden'
    }`}>
    <TbTargetArrow  />
    </span>
                <div className="px-6 py-6">
                  <h3 className="text-slate-200"> Netflix Clone</h3>
                  <p className="text-slate-400">Clonacion de netflix</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2">
                      <span className="text-2xl md:text-2xl"> <TbBrandNextjs /> </span>
                      <span className="uppercase font-medium text-sm">Next Js</span>
                    </div>

                    <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-2xl gap-2 ">
                      <span className="text-sky-500 text-lg md:text-2xl"> <FaDatabase   /> </span>
                      <span className="uppercase font-medium text-sm">Data Base</span>
                    </div>

                    <div className="flex bg-gray-800 md:px-3 items-center py-2 px-2 md:py-2 rounded-2xl gap-2">
                      <span className="text-sky-500 text-xl"> <SiTypescript    /> </span>
                      <span className="uppercase font-medium text-sm">TypeScript</span>
                    </div>
                  </div>
                </div>
              </Link>


              {/* Fin card */}


            </div>
          </div>
        </section>
    </>
  );
}

export default Index;
