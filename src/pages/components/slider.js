import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import Slidecard from "./slidecard";
import slides from "../../data/slides.json";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <div>
      <div className=" z-10 bg-gradient-to-r from-[#191919]/40 via-[#191919]/5 to-[#191919]/40">
        <div className="section__heading pb-4">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            5 Delicious
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Flavours!
          </motion.p>
        </div>
        <div className="hidden lg:block">
          <Swiper
            initialSlide={2}
            navigation={true}
            slidesPerView={5}
            centeredSlides={true}
            loop={false}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide>
                <Slidecard
                  key={slide.slideId}
                  id={slide.slideId}
                  title={slide.title}
                  slide={slide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
