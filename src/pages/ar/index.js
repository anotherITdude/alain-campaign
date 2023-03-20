import Head from 'next/head'

import Navbar from './components/navbar'
import Hero from './components/hero';
import Steps from './components/steps';
import Video from './components/video'
import Footer from './components/footer';
import Carousel from './components/carousel'


function Ar() { 

    return (
        <>
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
                     <Carousel />
                     <Steps />
                    <Video />
                    <Footer />
                    </div>
                    

                </main>
            </>
        </>
    )
}

export default Ar
