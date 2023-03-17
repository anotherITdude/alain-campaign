import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/logo.png'
import flag from '../../../../public/flag.png'
import hero from '../../../../public/hero.png'
import { motion } from "framer-motion"

function Hero() {
    return (
        <div>
            <div className="flex flex-col md:flex-row ">
                <div className="md:h-[600px] relative rounded-tl-2xl  md:rounded-tl-[2.5rem]
                md:basis-45 bg-gradient-to-r from-[#ec6558]/90 via-[#ec6558]/75 to-[#ec6558] ">


                    <div className="flex flex-col">

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2, type: "spring", stiffness: 100 }}
                            className="
                            hidden md:block
                    flex flex-row md:flex-col  p-5 md:pt-10 md:pr-8
                    font-high-voltage uppercase 
                    text-3xl md:text-5xl  text-white md:text-left
                    justify-center
                     ">
                            <p> CHEF-STYLE</p>
                            <p> &nbsp;CHICKEN,</p>
                            <p> &nbsp;AT HOME!</p>
                        </motion.div>
                       



                        

                    </div>



                </div>
                <div className="
                basis-55
                
                rounded-none  md:rounded-tr-[2.5rem]
                bg-gradient-to-tr from-[#191919]/20 via-[#191919]/70 to-[#191919]
                ">

                    <div className="flex justify-between items-center">

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, type: "spring", stiffness: 500 }}
                            className="logo w-[110px] md:w-[140px]">
                            <Image priority="blur" src={flag} alt="al ain logo"></Image>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="logo w-[100px] md:w-[180px]">
                            <Image priority="blur" src={logo} alt="al ain logo"></Image>
                        </motion.div>
                    </div>

                    <motion.div
                            initial={{ opacity: 0, y: -60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
                            className="absolute overflow-x-visible 
                            w-[50%] md:w-[53%] max-w-[550px]">
                            <Image className="
                            ml-[15%] mt-[-4%]
                            md:ml-[-75.5%] md:mt-[2%]
                            animate-[wiggle_1s_ease-in-out_infinite]
                            " src={hero} priority="blur" alt="al ain logo"></Image>
                        </motion.div>


                    <div className="font-high-voltage uppercase
                    text-4xl md:text-8xl text-white text-right
                    mt-5 mr-5 
                    md:mt-6 md:mr-8 leading-9">
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        > COOK IN</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="pl-1"> &nbsp;THE BAG</motion.p>

                    </div>
                    <div className="font-din uppercase text-right
                    text-md md:text-xl text-white tracking-wider
                    mt-5 mr-5 
                    md:mt-6 md:mr-8">
                        <motion.p
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2, type: "spring", stiffness: 100 }}
                        > <span className="text-2xl md:text-2xl">IN</span> GOES THE BAG
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2, type: "spring", stiffness: 100 }}
                            className="mt-[-5px]"
                        >
                            <span className="text-xl md:text-2xl">OUT</span> COMES THE COOKED CHICKEN!
                        </motion.p>

                    </div>



                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, type: "spring", stiffness: 100 }}
                        className="font-gotham-light text-right
                    text-xs md:text-sm text-white tracking-wider
                    mr-5 mr-10 mt-6
                    md:mr-6 md:mr-8
                    hidden md:block
                    ">
                        <p> Cook in The Bag is the simplest&nbsp;</p>
                        <p>way to make chef-style chicken at home.</p>
                        <p> Enjoy marinated chicken&nbsp;</p>
                        <p>that is 100% fresh, 100% delicious!</p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, type: "spring", stiffness: 100 }} className="block md:hidden 
                        text-xs text-white tracking-wider spacing-y-6
                        text-right
                        pt-5 pb-5 pl-16 pr-6
                        lg:pl-0 lg:pr-6
                        ">
                        <p> Cook in The Bag is the simplest way to make chef-style chicken at home.</p>
                        <p className="mt-1"> Enjoy marinated chicken that is 100% fresh, 100% delicious!</p>
                    </motion.div>

                    <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2, type: "spring", stiffness: 100 }} className="
                        block md:hidden 
                      text-white tracking-wider spacing-y-6
                        font-high-voltage uppercase 
                        md:basis-45 bg-gradient-to-r from-[#ec6558]/90 via-[#ec6558]/75 to-[#ec6558]
                        text-3xl md:text-5xl text-right
                        pt-3 pb-3 pl-16 pr-6
                        ">
                            <p> CHEF-STYLE CHICKEN</p>
                            <p> AT HOME</p>
                        </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Hero
