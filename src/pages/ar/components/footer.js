import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SocialMediaBg from "../../../../public/social_media_bg_ar.png";
import facebook from "../../../../public/fb.png";
import instagram from "../../../../public/insta.png";

import tiktok from "../../../../public/tiktok.png";

//import Feed from "react-instagram-authless-feed"

import Link from 'next/link'

function Footer() {
  return (
    <div>
        <div className="flex flex-col md:flex-row mb-0 md:mb-[50px]" >
            <div className="footer__left__ar footer__left__bg__ar ">
            <div className="section__heading_ar">
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >شارك أشهى وألذ الوصفات على</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >مواقع التواصل الاجتماعي وشاركها معنا</motion.p>
                    </div>
            
            <div className="social__handles__ar hidden md:block ">
                      <div className="social__icon__ar">
                     
                    <Link target="_blank" href="https://www.facebook.com/AlAinFarms/"> <Image src={facebook} alt='facebook' /></Link>
                          <Link target="_blank" href="https://www.facebook.com/AlAinFarms/">  <span> AlAinFarms</span></Link>
                     </div>
                  <div className="social__icon__ar">
                  <Link target="_blank" href="https://www.instagram.com/alainfarms/"><Image src={instagram} alt='instagram' /> </Link>
                  <Link target="_blank" href="https://www.instagram.com/alainfarms/"><span> alainfarms</span></Link>
            </div>
            
                  <div className="social__icon__ar">
                  <Link target="_blank" href="https://www.tiktok.com/@alain.farms"><Image src={tiktok} alt='tiktok' />  </Link>       
                  <Link  target="_blank" href="https://www.tiktok.com/@alain.farms"><span>alain.farms</span></Link>
                    </div>
          </div>
          
          <div className="image__bg">
            <Image className="social__bg__image__ar" alt="social media bg" priority="blur" src={SocialMediaBg} />
            </div>
            </div>

            <div className="footer__right_ar footer__right__bg__ar">
          

<div className="social__handles block md:hidden flex flex-row justify-center pt-3 pb-3">
                      <div className="social__icon">
                     
                    <Link target="_blank" href="https://www.facebook.com/AlAinFarms/"> <Image src={facebook} alt='facebook' /></Link>
                          <Link target="_blank" href="https://www.facebook.com/AlAinFarms/">  <span> AlAinFarms</span></Link>
                     </div>
                  <div className="social__icon">
                  <Link target="_blank" href="https://www.instagram.com/alainfarms/"><Image src={instagram} alt='instagram' /> </Link>
                  <Link target="_blank" href="https://www.instagram.com/alainfarms/"><span> alainfarms</span></Link>
                    </div>
                  <div className="social__icon">
                  <Link target="_blank" href="https://www.tiktok.com/@alain.farms"><Image src={tiktok} alt='tiktok' />  </Link>       
                  <Link  target="_blank" href="https://www.tiktok.com/@alain.farms"><span>alain.farms</span></Link>
                    </div>
                  </div>

            </div>
        </div>
      
    </div>
  );
}

export default Footer;



