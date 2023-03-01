import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { useRouter } from 'next/router'
import Navbar from './components/navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { router, pathname } = useRouter();
  console.log(router)
  return (
    <>
      <Head >
        <title>Al Ain farms - Cook In The Bag</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main__body">
        <div className="container">
          <Navbar />
          <div className="mt-10 text-black">NextJS</div>
        </div>

        <div className="h-[1000px]">gg</div>

      </main>
    </>
  )
}
