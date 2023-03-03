import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
    return (
        <div>
            <div className="flex flex-col md:flex-row mb-[50px] ">
                <div
                    className="h-[500px] md:basis-55 relative rounded-bl-2xl  md:rounded-bl-[2.5rem]
                bg-gradient-to-tr from-[#191919]/10 via-[#191919]/70 to-[#191919] "
                >
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
                </div>
                <div
                    className="
                rounded-none  md:rounded-br-[2.5rem] z-
                md:basis-45 bg-gradient-to-r from-[#ec6558]/90 via-[#ec6558]/75 to-[#ec6558]"
                ></div>
            </div>
        </div>
    );
}

export default Footer;
