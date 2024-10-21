/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from "react";
import {  FaDatabase  } from "react-icons/fa6";
import { SiTypescript   } from "react-icons/si";
import { TbBrandNextjs, TbTargetArrow  } from "react-icons/tb";
import { IoLogoHtml5, IoLogoJavascript  } from "react-icons/io5";


function Proyects() {
    const [hovered, setHovered] = useState(false);
  return (
    <>
        <section className="mt-16 w-full px-4 flex  items-center  mb-16 md:px-16" id="proyectos">
          <div className="w-full">
            <div className="relative">
              <h2 className="text-white text-3xl font-bold before:absolute before:w-2 before:h-2 before:rounded-full before:bg-sky-500 before:bottom-[.5rem] before:left-[9.28rem]">Proyectos</h2>
            </div>

            <div className="flex flex-col gap-4 mt-8">

              {/* card */}


              <Link href={"https://tienda-shopix-utn.vercel.app/"} target="_blank" className="block relative group border-2 border-gray-700 hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow    sm:hover:-translate-y-1 text-gray-200 " onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
    <span className={`text-gray-500 text-2xl  absolute right-4 top-3 transition-all ${
      hovered ? 'block' : 'hidden'
    }`}>
    <TbTargetArrow  />
    </span>
                <div className="px-6 pb-6 pt-5 grid grid-cols-6 gap-4">
                  <img src="/image/tiendaweb.png" alt=" tienda shopix" className='col-span-2 w-full h-full object-cover '/>
                  <div className='col-span-3'>
                    <h3 className="text-slate-200"> Tienda Shopix</h3>
                    <p className="text-slate-400">Emulacion de tienda web</p>
                    <div className="flex   gap-2 mt-4">
                    <div className="flex  bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-full gap-2">
                        <span className="text-2xl md:text-2xl"> <TbBrandNextjs /> </span>
                      </div>
                    
                      <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 rounded-full gap-2 ">
                        <span className="text-sky-500 text-lg md:text-2xl"> <FaDatabase/></span>
                      </div>
                    
                      <div className="flex  bg-gray-800 md:px-3 items-center py-2 px-2 md:py-2 rounded-full gap-2">
                        <span className="text-sky-500 text-xl" title='TypeScript'> <SiTypescript/></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>


              {/* Fin card */}
              {/* card */}


              <Link href={"https://netflow.vercel.app/"} target="_blank" className="block relative group border-2 border-gray-700 hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1  text-gray-200 " onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
    <span className={`text-gray-500 text-2xl  absolute right-4 top-3 transition-all ${
      hovered ? 'block' : 'hidden'
    }`}>
    <TbTargetArrow  />
    </span>
                <div className="px-6 pb-6 pt-4 grid grid-cols-6 gap-4">
                  <img src="/image/netflixweb.png" alt="netflix clone" className='col-span-2 w-full h-full object-cover ' />
                  <div className='col-span-3'>
                    <h3 className="text-slate-200"> Netflix Clone</h3>
                    <p className="text-slate-400">Clonacion de netflix</p>
                    <div className="flex  gap-2 mt-4">
                    <div className="flex bg-gray-800 w-max md:px-3 items-center py-1 px-2 md:py-2 rounded-full gap-2">
                        <span className="text-2xl md:text-2xl"> <TbBrandNextjs/></span>
                      </div>
                    
                      <div className="flex bg-gray-800 w-max md:px-3 items-center py-1 px-2 md:py-2 rounded-full gap-2 ">
                        <span className="text-sky-500 text-lg md:text-2xl"> <FaDatabase/> </span>
                      </div>
                    
                      <div className="flex bg-gray-800 w-max md:px-3 items-center py-2 px-2 md:py-2 rounded-full gap-2">
                        <span className="text-sky-500 text-xl"> <SiTypescript/></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>


              {/* Fin card */}
              {/* card */}


              <Link href={"https://webui1.vercel.app/"} target="_blank" className="block relative group border-2 border-gray-700 hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow  sm:hover:-translate-y-1 text-gray-200 " onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
    <span className={`text-gray-500 text-2xl  absolute right-4 top-3 transition-all ${
      hovered ? 'block' : 'hidden'
    }`}>
    <TbTargetArrow  />
    </span>
                <div className="px-6 pb-6 pt-4 grid grid-cols-6 gap-4">
                  <img src="/image/webui.png" alt="web ui" className='col-span-2 w-full h-full object-cover ' />
                 <div className='col-span-3'>
                   <h3 className="text-slate-200"> Web Ui</h3>
                   <p className="text-slate-400">Clonacion de una pagina web</p>
                   <div className="flex gap-4 mt-4">
                   <div className="flex bg-gray-800 md:px-3 items-center py-1 w-max px-2 md:py-2 rounded-full gap-2">
                       <span className="text-2xl md:text-2xl text-orange-600"> <IoLogoHtml5 /> </span>
                     </div>
                  
                     <div className="flex bg-gray-800 md:px-3 items-center py-1 px-2 md:py-2 w-max rounded-full gap-2 ">
                       <span className="text-yellow-500 text-lg md:text-2xl"> <IoLogoJavascript /> </span>
                     </div>
                  
                     
                   </div>
                 </div>
                </div>
              </Link>


              {/* Fin card */}


            </div>
          </div>
        </section>

    </>
  )
}

export default Proyects