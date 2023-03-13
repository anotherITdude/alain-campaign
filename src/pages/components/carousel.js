import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSwiperSlide } from "swiper/react";
import slides from "../../data/slides.json"
import Image from 'next/image'
 import periperi from "../../../public/peri_peri.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const SwiperButtonNext = ({ children }) => {
//   const swiper = useSwiper();
//   return <button onClick={() => swiper.slideNext()}>{children}</button>;
// };

// function SlideTitle() {
//   const swiperSlide = useSwiperSlide();

//   return (
//     <p>Current slide is {swiperSlide.isActive ? "active" : "not active"}
//     </p>
//   );
// }

function Carousel() {
  
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
        <div className="swiper__mobile block lg:block pb-5">
          <Swiper
             modules={[Navigation, Pagination]}
             spaceBetween={10}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              
              <SwiperSlide key={slide.slideId}>
                <div className="slide__area">
                  <p className="slide__heading">{slide.title}</p>
                  <p className="slide__weight">{slide.weight}</p>
                  <Image className="image" src={periperi} alt={slide.title} />
                  <p className="slide__desc">{slide.body}</p>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
