import Image from 'next/image'
import styles from './page.module.css'
import Index from '@/components/Index'
import Footer from "@/components/Footer"
import Proyects from "@/components/Proyects"
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main className="max-w-5xl m-auto overflow-hidden xl:overflow-visible">
      <Index />
      <Experience />
      <Proyects />
    <Footer />
    </main>
  )
}
