import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import cooking_steps from "../../../public/cooking_steps_bg.png"
import step1 from "../../../public/step1.png"
import step2 from "../../../public/step2.png"
import step3 from "../../../public/step3.png"
import step4 from "../../../public/step4.png"

import mstep1 from "../../../public/mstep1.png"
import mstep2 from "../../../public/mstep2.png"
import mstep3 from "../../../public/mstep3.png"
import mstep4 from "../../../public/mstep4.png"

import { LayoutGroup } from "framer-motion"



function Steps() {
    return (
        <div>
            <div className="flex flex-col md:flex-row">

                <div className=" 
                z-20 
                md:basis-45 
                bg-gradient-to-tr from-[#191919]/60 via-[#191919]/80 to-[#191919]
                md:bg-gradient-to-r md:from-[#ec6558]/90 md:via-[#ec6558]/75 md:to-[#ec6558]">
                    <div className="section__heading hidden md:block">
                    <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                        >4 easy</motion.p>
                        <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1}}
                        >Cooking steps</motion.p>
                    </div>
                    <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="image__bg hidden md:block">
            <Image className="cooking_steps__bg__image" alt="coooking steps bg" priority="blur" src={cooking_steps} />
            </motion.div>
                </div>
                <div className="
                
                md:basis-55
                bg-gradient-to-tr from-[#191919]/60 via-[#191919]/80 to-[#191919]
                md:bg-gradient-to-r md:from-[#191919]/90 md:via-[#191919]/50 md:to-[#191919]/20">
                    
                    <div className="section__heading block md:hidden">
                    <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                        >4 easy</motion.p>
                        <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1}}
                        >Cooking steps</motion.p>
                    </div>
                    <div className="steps__block">
                        <LayoutGroup>
                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:1 }}
                        className='steps step__1'>
                        <div className="step1__img">
                            <Image className="hidden md:block" priority="blur" src={step1} />
                            <Image className="block md:hidden" priority="blur" src={mstep1} />
                        </div>
                        <div className="steps__desc">Pre-heat oven <br/>at 180&#176;C</div>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:1.5 }}
                        className='steps step__2'>
                        <div className="step2__img">
                            <Image className="hidden md:block" priority="blur" src={step2} />
                            <Image className="block md:hidden" priority="blur" src={mstep2} />
                        </div>
                        <div className="steps__desc">Remove the bag from <br/>the box and dispose <br/>of the box</div>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:2 }}
                        className='steps step__3'>
                        <div className="step3__img">
                            <Image className="hidden md:block" priority="blur" src={step3} />
                            <Image className="block md:hidden" priority="blur" src={mstep3} />
                        </div>
                        <div className="steps__desc">Place the bag with <br/>the chicken on a cooking tray <br/>and put it in the oven</div>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:2.5 }}
                        className='steps step__4'>
                            <div className="step4__img">
                                <Image className="hidden md:block" priority="blur" src={step4} />
                                <Image className="block md:hidden" priority="blur" src={mstep4} />
                            </div>
                        <div className="steps__desc">Cook for 45 mins <br/>at 180&#176;C</div>
                        </motion.div>
                        </LayoutGroup>
                        
                    </div>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="cooking__description">
                    <p>
                        Temperature and timing may vary according to the oven at home. <br />
                         We recommend using a cooking tray and not placing the bag directly on the grill.<br /> 
                         Safe for microwave - Adjust cooking timings to 25-30 minutes for the whole chicken and 10-15 minutes for half chicken.
                    </p>
                    </motion.div>
                    
                </div>
            </div>
        </div>
    )
}

export default Steps
