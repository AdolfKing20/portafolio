import Image from "next/image"
import yo from "../../public/image/yo.jpg"
import Link from "next/link"
function Index() {
  return (
    <>
    <div className="flex flex-col">
        <Image src={yo} alt="FOto de AdolfDev" />  

        <div className="flex flex-col items-center">
            <h1 className="text-[#fdfdfd] text-3xl uppercase font-bold ">Frontend</h1>
            <h2 className="text-[#316275] font-light text-[1.2rem] uppercase">Developer</h2>
          <Link href={"#"} className="px-16 py-3 mt-5 text-[#fdfdfd] font-light uppercase border border-[#316275] rounded-xl">Sobre mi</Link>
        </div>
    </div>
    
    
    </>
  )
}

export default Index