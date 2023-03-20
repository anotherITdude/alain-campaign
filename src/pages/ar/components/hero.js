import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import flag from "../../../../public/logo_ar.png";
import hero from "../../../../public/hero.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div
          className="pb-10 md:basis-55 relative rounded-tl-2xl  md:rounded-tl-[2.5rem]
                bg-gradient-to-tr from-[#191919]/20 via-[#191919]/70 to-[#191919] "
        >
          <div className="flex justify-between items-center">

<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, type: "spring", stiffness: 500 }}
    className="logo w-[110px] md:w-[140px] block md:hidden">
    <Image priority="blur" src={flag} alt="al ain logo"></Image>
</motion.div>
<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="logo w-[100px] md:w-[180px]">
    <Image priority="blur" src={logo} alt="al ain logo"></Image>
</motion.div>
<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, type: "spring", stiffness: 500 }}
    className="logo w-[110px] md:w-[140px] hidden md:block">
    <Image priority="blur" src={flag} alt="al ain logo"></Image>
</motion.div>
</div>

          <div className="flex flex-col text-right 
          mr-6 md:mr-[40%]
            ">
            <div
              className="font-bebasar-bold uppercase
                    text-5xl md:text-6xl lg:text-8xl
                 text-white
                    mt-5 ml-5 mb-4
                    md:mt-6 md:ml-10 leading-9 
                    "
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="pl-1"
              >
                &nbsp;يُطبخ في
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                الكيس
              </motion.p>
            </div>
           

            <div
              className=" 
              hidden md:block
              font-bebasar-bold uppercase
                    text-md 
                    md:text-lg md:text-lg 
                    lg:text-lg lg:text-xl 
                  text-white tracking-wider
                    mt-5 ml-5
                    md:mt-6 md:ml-10
                    "
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, type: "spring", stiffness: 100 }}
              >
                {" "}
                <span className="text-2xl md:text-2xl ">ادخل</span>الدجاجة داخل
                كيس الطهي
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, type: "spring", stiffness: 100 }}
                className="mt-[-5px]"
              >
                <span className="text-xl md:text-2xl">واحصل</span> على ألذ وأشهى
                وجبة دجاج!
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, type: "spring", stiffness: 100 }}
              className="font-helvetica-neue-arabic-roman
                    text-xs md:text-sm lg:text-lg text-white tracking-wider
                    mt-5 ml-10 
                    md:mt-6 md:ml-10
                    hidden md:block
                    "
            >
              <p> "ُيطبخ في الكيس" أبسط طريقة لإعداد&nbsp;</p>
              <p>أشهى وألذ وصفات الدجاج في المنزل</p>
              <p> على طريقة الشيف. استمتع بالدجاج&nbsp;</p>
              <p>المتبل الطازج 100% واللذيذ 100%!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
              className="absolute overflow-x-visible 
                            w-[50%] md:w-[92%]"
            >
              <Image
                className=" z-20
                            ml-[8%] mt-[-15%]
                            md:ml-[75.5%] md:mt-[-5%] lg:mt-[-10%]
                            animate-[wiggle_1s_ease-in-out_infinite]
                            "
                src={hero}
                priority="blur"
                alt="al ain logo"
              ></Image>
            </motion.div>
          </div>
          <div
              className=" 
              block md:hidden
              font-bebasar-bold uppercase
                    text-md 
                    md:text-lg md:text-lg 
                    lg:text-lg lg:text-xl 
                  text-white tracking-wider
                    mt-5 ml-5 text-right
                    pt-1 pb-0 pl-16 pr-6
                    md:mt-6 md:ml-10
                    "
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, type: "spring", stiffness: 100 }}
              >
                {" "}
                <span className="text-2xl md:text-2xl ">ادخل</span>الدجاجة داخل
                كيس الطهي
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, type: "spring", stiffness: 100 }}
                className="mt-[-5px]"
              >
                <span className="text-xl md:text-2xl">واحصل</span> على ألذ وأشهى
                وجبة دجاج!
              </motion.p>
            </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            className="block md:hidden
                        font-helvetica-neue-arabic-roman block md:hidden 
                        text-xs text-white tracking-wider spacing-y-6
                        text-right
                        pt-8 pb-5 pl-16 pr-6
                        "
          >
            <p>
              "ُيطبخ في الكيس" أبسط طريقة لإعداد أشهى وألذ وصفات الدجاج في
              المنزل
            </p>
            <p className="mt-1">
              {" "}
              على طريقة الشيف. استمتع بالدجاج المتبل الطازج 100% واللذيذ 100%!
            </p>
          </motion.div>
        </div>
        <div
          className="
                hidden md:block 
                rounded-none  md:rounded-tr-[2.5rem] z-
                md:basis-45 bg-gradient-to-r from-[#ec6558]/90 via-[#ec6558]/75 to-[#ec6558]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            className="
                    flex flex-row md:flex-col  p-5 md:pt-10 md:pr-8
                    font-bebasar-bold uppercase 
                    text-3xl md:text-5xl 
                   text-white md:text-right
                    justify-center
                     "
          >
            <p>مذاق ونكهة</p>
            <p>الشيف، داخل</p>
            <p>منزلك!</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
          className="
                        block md:hidden 
                      text-white tracking-wider spacing-y-6
                      font-bebasar-bold uppercase 
                        md:basis-45 bg-gradient-to-r from-[#ec6558]/90 via-[#ec6558]/75 to-[#ec6558]
                        text-3xl md:text-5xl text-right
                        pt-3 pb-3 pl-10 pr-6
                        "
        >
          <p> مذاق ونكهة الشيف، داخل </p>
          <p>منزلك!</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
