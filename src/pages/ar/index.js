import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { useRouter } from 'next/router'
import Navbarar from '../components/navbarar';
import Heroar from '../components/heroar'


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
                        <Navbarar />
                        <Heroar />
                        
                    </div>
                    <div className="h-[1000px]"></div>

                </main>
            </>
        </>
    )
}

export default Ar
