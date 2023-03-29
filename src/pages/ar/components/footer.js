import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SocialMediaBg from "../../../../public/social_media_bg_ar.png";
import facebook from "../../../../public/fb.png";
import instagram from "../../../../public/insta.png";

import tiktok from "../../../../public/tiktok.png";


import Link from 'next/link'

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mb-0 md:mb-[50px]" >
        <div className="footer__left__ar footer__left__bg__ar ">
          
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
              <Link target="_blank" href="https://www.tiktok.com/@alain.farms"><span>alain.farms</span></Link>
            </div>
          </div>

          
        </div>

        <div className="footer__right_ar footer__right__bg__ar">

          <div className="section__heading_ar leading-[35px] md:leading-[50px]">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >شارك أشهى وألذ الوصفات على</motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              >!مواقع التواصل الاجتماعي وشاركها معنا</motion.p>
          </div>
          <div className="image__bg hidden md:block w-[100%] ">
            <Image className="social__bg__image__ar" alt="social media bg" priority="blur" src={SocialMediaBg} />
          </div>
          <div className="social__handles block md:hidden flex flex-row justify-center pt-3 pb-3">
            <div className="section__heading_ar leading-[35px] md:leading-[50px] hidden md:block">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >شارك أشهى وألذ الوصفات على</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >!مواقع التواصل الاجتماعي وشاركها معنا</motion.p>
            </div>


          </div>
          <div className="image__bg block md:hidden mt-[-20px]">
            <Image className="social__bg__image__ar" alt="social media bg" priority="blur" src={SocialMediaBg} />
          </div>
        </div>
        
      </div>
      <div className="footer__right footer__right__bg  md:hidden flex justify-items-center">
        <div className="social__handles">
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
            <Link target="_blank" href="https://www.tiktok.com/@alain.farms"><span>alain.farms</span></Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;



