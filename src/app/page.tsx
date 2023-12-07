import Image from 'next/image'
import styles from './page.module.css'
import Index from '@/components/Index'
import About from './About'

export default function Home() {
  return (
    <main className={styles.main}>
      <Index />
    </main>
  )
}
