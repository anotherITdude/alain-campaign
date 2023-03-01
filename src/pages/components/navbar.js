import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { motion } from "framer-motion"

function Navbar() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`flex navbar_heading justify-end`}>
            <motion.ul
                initial={{ y: -40 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                className='mr-2'>
                <motion.li className="inactive">En  </motion.li>
                <motion.li className="divider">|</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="active"><Link href="/ar">Ar</Link></motion.li>
            </motion.ul>

        </motion.div>
    )
}

export default Navbar
