import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

function Navbar() {

    return (
        <div className={`flex navbar_heading justify-end`}>
            <ul className='flex items-center justify-center'>
                <li><Link href="/">En</Link></li>
                <li><Link href="/ar">Ar</Link></li>
            </ul>

        </div>
    )
}

export default Navbar
