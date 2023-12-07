import Image from "next/image"
import yo from "../../public/image/yo.jpg"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Index() {
  return (
    <>
    <div className="flex flex-col md:flex-row md:items-center justify-center md:m-auto md:gap-5 h-screen">
        <Image src={yo} alt="FOto de AdolfDev" className="md:w-1/2"/>  

        <div className="flex flex-col items-center md:w-1/2">
            <h1 className="text-[#fdfdfd] text-3xl md:text-6xl uppercase font-bold ">Frontend</h1>
            <h2 className="text-[#3f8ba9] font-light text-[1.2rem] md:text-3xl uppercase">Developer</h2>
          <div className="flex flex-col gap-4   items-center mt-5">
            <Link href={"#"} className="px-16  py-3  text-[#fdfdfd] font-light uppercase border border-[#479ec1] rounded-xl hover:bg-[#479ec1]">Sobre mi</Link>
            <div className="flex gap-4">
              <Link href={"https://github.com/AdolfKing20"} className="text-white text-4xl hover:text-[#479ec1] ">
                <span>
                <FaGithub />
                </span>
              </Link>
              <Link href={"https://www.linkedin.com/in/rodrigo-gimenez-83122a26b/"} className="text-white text-4xl hover:text-[#479ec1] ">
                <span>
                <FaLinkedin />
                </span>
              </Link>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Index