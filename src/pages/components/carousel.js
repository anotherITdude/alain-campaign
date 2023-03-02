import React from 'react'
import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

function Carousel() {

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500
  // };

  return (
    <div>
      <div className="h-[500px] z-10
    bg-gradient-to-r from-[#191919]/80 via-[#191919]/20 to-[#191919]/40">

        <div className="section__heading">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >5 Delicious</motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >Flavours!</motion.p>
        </div>


      </div>
    </div>
  )
}

export default Carousel