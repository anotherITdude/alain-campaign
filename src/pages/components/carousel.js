import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from "swiper";
import { useSwiperSlide } from 'swiper/react';

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

export  function SlideTitle() {
  const swiperSlide = useSwiperSlide();

  return (
    <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p>
  );
}


function Carousel() {
  const swiperSlide = useSwiperSlide();
  console.log(swiperSlide)
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
        <div className="block lg:block h-[500px]">
        <Swiper
            slidesPerView={5}
            initialSlide={2}
            spaceBetween={30}
            centeredSlides={true}
            dots={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
    >
            <SwiperSlide>
              <SlideTitle />
            </SwiperSlide>
            <SwiperSlide>
              <SlideTitle />
            </SwiperSlide>
            <SwiperSlide>
            <SlideTitle />
            </SwiperSlide>
        
       
        <SwiperButtonNext>Slide</SwiperButtonNext>

    </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
