import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub  } from "react-icons/fa6";
function Index() {
 
  return (
    <>
      <section className="h-dvh flex items-center px-4 md:px-16 text-white" id="home">

        <div className="">
          <div className="flex  items-center gap-3 mb-4">
            <picture className=" rounded-full border-sky-600 border-2">
              <img src="/rodridev.png" alt="rodridev" className="w-auto h-16 md:h-20"/>
            </picture>
            <button className="py-1 px-2 md:py-2 md:px-4 bg-sky-950 w-max rounded-3xl border border-sky-600">
              <Link href={"/"}>
                <span className=" text-sm md:text-base">Disponible para trabajar</span>
              </Link>
            </button>
          </div>
          <h2 className="text-2xl lato-black-italic md:text-3xl relative after:absolute after:w-24 after:md:w-32 after:h-1 after:-bottom-1 after:rounded-full after:right-1 w-max after:bg-sky-400">Hola!, soy rodridev</h2>
          <h3 className="mt-4 text-xl lato-light-italic text-slate-200/80">Desarrollador Frontend de 23 años, con experiencia intermedia en tecnologías frontend y conocimientos básicos de backend. Como autodidacta, siempre busco nuevas oportunidades de aprendizaje y desafíos que impulsen mi crecimiento y contribuyan a soluciones innovadoras.</h3>
          <div className="flex gap-3 mt-4">
            <button className="py-1 px-2 bg-sky-950 w-max rounded-3xl border border-sky-600">
            <Link href={""} className="flex items-center gap-2 text-xl">
            <FaLinkedin /> 
            </Link>
            </button>
            <button className="py-1 px-2 bg-sky-950 w-max rounded-3xl border border-sky-600">
            <Link href={""} className="flex items-center gap-2 text-xl">
            <FaGithub /> 
            </Link>
            </button>
            <button className="py-1 px-2 bg-sky-950 w-max rounded-3xl border border-sky-600">
            <Link href={""} className="flex items-center gap-2 text-xl">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg> Contactame
            </Link>
            </button>
          </div>
        </div>
       
      </section>    
    </>
  );
}

export default Index;
