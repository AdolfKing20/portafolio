import Image from "next/image"
import yo from "../../public/image/yo.jpg"
import Link from "next/link"
function Index() {
  return (
    <>
    <div className="flex flex-col md:flex-row md:items-center md:max-w-6xl md:m-auto md:gap-5 md:mt-24">
        <Image src={yo} alt="FOto de AdolfDev" className="md:w-1/2"/>  

        <div className="flex flex-col items-center md:w-1/2">
            <h1 className="text-[#fdfdfd] text-3xl md:text-6xl uppercase font-bold ">Frontend</h1>
            <h2 className="text-[#316275] font-light text-[1.2rem] md:text-3xl uppercase">Developer</h2>
          <Link href={"#"} className="px-16 py-3 mt-5 text-[#fdfdfd] font-light uppercase border border-[#316275] rounded-xl hover:bg-[#316275]">Sobre mi</Link>
        </div>
    </div>
    
    
    </>
  )
}

export default Index