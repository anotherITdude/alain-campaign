import React from 'react'
import { motion } from "framer-motion";

function Video() {
  return (
    <div>
      <div className="h-[500px] z-10
    bg-gradient-to-t from-[#191919] via-[#191919]/40 to-[#191919]/10">

        <div className="section__heading">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >Watch</motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >How to cook!</motion.p>
        </div>
      </div>
    </div>
  )
}

export default Video
