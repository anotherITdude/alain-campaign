import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SocialMediaBg from "../../../public/social_media_bg.png";
import facebook from "../../../public/fb.png";
import instagram from "../../../public/insta.png";

import tiktok from "../../../public/tiktok.png";


import Link from 'next/link'

function Footer() {
  return (
    <div>
        <div className="flex flex-col md:flex-row mb-0 md:mb-[50px]" >
            <div className="footer__left footer__left__bg">
            <div className="section__heading">
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >Share your chef-worthy</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >meals on social media and tag us!</motion.p>
                    </div>
            <div className="image__bg">
            <Image className="social__bg__image" alt="social media bg" priority="blur" src={SocialMediaBg} />
            </div>
            </div>

            <div className="footer__right footer__right__bg">
                  <div className="social__handles">
                      <div className="social__icon">
                     
                    <Link target="_blank" href="https://www.facebook.com/AlAinFarms/"> <Image src={facebook} alt='facebook' /></Link>
                          <Link target="_blank" href="https://www.facebook.com/AlAinFarms/">  <span> AlAinFarms</span></Link>
                     </div>
                  <div className="social__icon">
                  <Link target="_blank" href="https://www.instagram.com/alainfarms/"><Image src={instagram} alt='facebook' /> </Link>
                  <Link target="_blank" href="https://www.instagram.com/alainfarms/"><span> ainfarms</span></Link>
                    </div>
                  <div className="social__icon">
                  <Link target="_blank" href="https://www.tiktok.com/@alain.farms"><Image src={tiktok} alt='facebook' />  </Link>       
                  <Link  target="_blank" href="https://www.tiktok.com/@alain.farms"><span>alain.farms</span></Link>
                    </div>
                  </div>

            </div>
        </div>
      
    </div>
  );
}

export default Footer;
