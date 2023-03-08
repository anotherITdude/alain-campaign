import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { useRouter } from 'next/router'
import Navbar from './components/navbar'
import Hero from './components/hero';
import Steps from './components/steps';
import Video from './components/video'
import Footer from './components/footer';
//import Slider from './components/slider'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
          <Hero />
          {/* <Slider /> */}
          <Steps />
          <Video />
          <Footer />
        </div>



      </main>
    </>
  )
}
