import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { motion } from 'framer-motion';

function Navbarar() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`flex navbar_heading justify-start`}>
            <motion.ul
                initial={{ y: -40, opacity:0 }}
                whileInView={{ y: 0,opacity:1 }}
                transition={{ duration: 1 }}
                className='ml-2'>
                <motion.li whileHover={{ scale: 1.1 }} className="active"><Link href="/">En</Link></motion.li>
                <motion.li className="divider">|</motion.li>
                <motion.li className="inactive">Ar</motion.li>
            </motion.ul>

        </motion.div>
    )
}

export default Navbarar
