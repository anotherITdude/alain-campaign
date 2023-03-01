import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

function Navbarar() {

    return (
        <div className={`flex navbar_heading justify-start`}>
            <ul className='flex items-center justify-center'>
                <li><Link href="/">En</Link></li>
                <li><Link href="/ar">Ar link</Link></li>
            </ul>

        </div>
    )
}

export default Navbarar
