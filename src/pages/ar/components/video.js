import React from "react";
import { motion } from "framer-motion";
import cook from "../../../../public/Cooked-Whole-Chicken.png";
import Image from "next/image";
import YoutubeEmbed from "../../components/youtubeEmbed";


function Video() {
  return (
    <div>
      <div
        className=" z-10 md:overflow-hidden
    bg-gradient-to-t from-[#191919] via-[#191919]/40 to-[#191919]/10"
      >
        <div id="cook" className="flex 
        flex-col
        md:flex-row
        justify-center   
        md:justify-evenly md:items-center ">
          <div className="left">
            <div className="section__heading_ar">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
               شاهد
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
               طريقة الطهي!
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
            <div className="cooking_video" id="onekg">
            <YoutubeEmbed className="rounded-3xl" embedId="mxj8eb6Fn4k" />

              <p className="font-helvetica-neue-arabic-roman text-right text-lg text-white pt-3">طريقة طهي دجاجة كاملة</p>
            </div>

            <div className="cooking_video" id="halfkg">
              <YoutubeEmbed className="rounded-3xl" embedId="mxj8eb6Fn4k" />
              <p className="font-helvetica-neue-arabic-roman text-right text-lg text-white pt-3">طريقة طهي نصف دجاجة</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
