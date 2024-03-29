import React from "react";
import { motion } from "framer-motion";
import cook from "../../../public/Cooked-Half-Chicken.png";
import cook_thumb from "../../../public/cook-thumbnail.jpg"
import Image from "next/image";
import YoutubeEmbed from "../components/youtubeEmbed";


function VideoHalf() {
  return (
    <div>
      <div
        className=" z-10 md:overflow-hidden
    bg-gradient-to-t from-[#191919] via-[#191919]/40 to-[#191919]/10"
      >
        <div id="halfkg" className="flex 
        flex-col
        md:flex-row
        justify-center   
        md:justify-evenly md:items-center ">
          <div className="left">
            <div className="section__heading">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Watch
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                How to cook half chicken!
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
              className="
              hidden md:block">
              <Image
                className="howtocook_bg"
                src={cook}
                priority="blur"
                alt="how to cook"
              ></Image>
            </motion.div>
          </div>
          <div className="right mt-[5%] items-center

          ">
            <div className="cooking_video" >
              <YoutubeEmbed className="rounded-3xl" embedId="rnC4EMotW-c" />

              <p className="font-gotham-light text-lg text-white pt-3">Mediterranean Chicken</p>
            </div>

            <div className="cooking_video" >
              <YoutubeEmbed className="rounded-3xl" embedId="jyAadOGSTd8" />
              <p className="font-gotham-light text-lg text-white pt-3">Teriyaki Chicken</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoHalf;
