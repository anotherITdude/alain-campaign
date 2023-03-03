import React from 'react'
import { motion } from "framer-motion";

function Steps() {
    return (
        <div>
            <div className="flex flex-col md:flex-row">

                <div className=" 
                h-[500px] 
                md:basis-45 
                bg-gradient-to-tr from-[#191919]/60 via-[#191919]/80 to-[#191919]
                md:bg-gradient-to-r md:from-[#ec6558]/90 md:via-[#ec6558]/75 md:to-[#ec6558]">
                    <div className="section__heading">
                    <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                        >4 easy</motion.p>
                        <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                        >Cooking steps</motion.p>
                    </div>
                </div>
                <div className="
                h-[500px]
                md:basis-55 
                bg-gradient-to-r from-[#ec6558]/90 via-[#ec6558]/75 to-[#ec6558]
                md:bg-gradient-to-r md:from-[#191919]/90 md:via-[#191919]/50 md:to-[#191919]/20">
                    
                </div>
            </div>
        </div>
    )
}

export default Steps
