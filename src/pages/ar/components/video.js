import React from "react";
import { motion } from "framer-motion";
import cook from "../../../../public/Cooked-Whole-Chicken.png";
import Image from "next/image";
import YoutubeEmbed from "../../components/youtubeEmbed";


function Video() {
  return (
    <div>
      <div id="onekg"
        className=" z-10 md:overflow-hidden
    bg-gradient-to-t from-[#191919] via-[#191919]/40 to-[#191919]/10"
      >
        <div className="flex 
        flex-col
        md:flex-row
        justify-center   
        md:justify-evenly md:items-center ">
         
          <div className="right mt-[5%] items-center">
            
          <div className="section__heading_ar mt-[-30px] mb-6 block md:hidden">
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
              >!طريقة طهي دجاجة كاملة  
                
              </motion.p>
            </div>
            <div className="cooking_video" >
            <YoutubeEmbed className="rounded-3xl" embedId="z0R00rh4oG8" />

              <p className="font-helvetica-neue-arabic-roman text-right text-lg text-white pt-3">بنكهة البيري بيري</p>
            </div>

            <div className="cooking_video" >
              <YoutubeEmbed className="rounded-3xl" embedId="TLaryCiQzBs" />
              <p className="font-helvetica-neue-arabic-roman text-right text-lg text-white pt-3">بنكهة الثوم والفلفل</p>
            </div>

            <div className="cooking_video">
              <YoutubeEmbed className="rounded-3xl" embedId="6zIDFqb4Bxc" />
              <p className="font-helvetica-neue-arabic-roman text-right text-lg text-white pt-3">بنكهة الباربكيو المدخن</p>
            </div>

          </div>

          <div className="left">
            <div className="section__heading_ar hidden md:block pr-0">
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
                
              >!طريقة طهي دجاجة كاملة
                
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


        </div>
      </div>
    </div>
  );
}

export default Video;
