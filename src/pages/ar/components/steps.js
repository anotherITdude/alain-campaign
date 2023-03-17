import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import cooking_steps from "../../../../public/cooking_steps_ar_bg.png"
import step1 from "../../../../public/step1.png"
import step2 from "../../../../public/step2.png"
import step3 from "../../../../public/step3.png"
import step4 from "../../../../public/step4.png"

import mstep1 from "../../../../public/mstep1.png"
import mstep2 from "../../../../public/mstep2.png"
import mstep3 from "../../../../public/mstep3.png"
import mstep4 from "../../../../public/mstep4.png"

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
                    <div className="section__heading_ar hidden md:block">
                    <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                        >4 خطوات </motion.p>
                        <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1}}
                        >سهلة للطهي</motion.p>
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
                    
                    <div className="section__heading_ar block md:hidden">
                    <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                        >4 خطوات </motion.p>
                        <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1}}
                        >سهلة للطهي</motion.p>
                    </div>
                    <div className="steps__block '">
                        <LayoutGroup>
                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:1 }}
                        className='steps step__1 font-'>
                        <div className="step1__img">
                            <Image className="hidden md:block" alt="cooking step" priority="blur" src={step1} />
                            <Image className="block md:hidden" alt="cooking step" priority="blur" src={mstep1} />
                        </div>
                        <div className="steps__desc_ar">قم بتسخين الفرن قبل الطهي على درجة حرارة 180 مئوية
                        </div>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:1.5 }}
                        className='steps step__2'>
                        <div className="step2__img">
                            <Image className="hidden md:block" alt="cooking step" priority="blur" src={step2} />
                            <Image className="block md:hidden" alt="cooking step" priority="blur" src={mstep2} />
                        </div>
                        <div className="steps__desc_ar">
                        أخرج الكيس من العبوة وتخلص من العبوة
                           </div>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:2 }}
                        className='steps step__3'>
                        <div className="step3__img">
                            <Image className="hidden md:block" alt="cooking step" priority="blur" src={step3} />
                            <Image className="block md:hidden" alt="cooking step" priority="blur" src={mstep3} />
                        </div>
                        <div className="steps__desc_ar">
                        ضع الكيس وداخله الدجاجة على صينية الطهي وادخله مباشرة داخل الفرن.
                           </div>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:2.5 }}
                        className='steps step__4'>
                            <div className="step4__img">
                                <Image className="hidden md:block" alt="cooking step" priority="blur" src={step4} />
                                <Image className="block md:hidden" alt="cooking step" priority="blur" src={mstep4} />
                            </div>
                        <div className="steps__desc_ar">
                        اتركها 45 دقيقة على درجة حرارة 180 مئوية*.
                            </div>
                        </motion.div>
                        </LayoutGroup>
                        
                    </div>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="cooking__description_ar">
                    <p>
                    * قد تختلف درجة الحرارة ومدة الطهي حسب نوع الفرن المنزلي. يُنصح باستخدام صينية الطهي وعدم وضع الكيس مباشرة على الشواية. آمن للاستخدام في الميكروويف - قم بضبط مدة الطهي بين 25-30 دقيقة للدجاجة الكاملة و 10-15 دقيقة لنصف الدجاجة
                    </p>
                    </motion.div>
                    
                </div>
            </div>
        </div>
    )
}

export default Steps
