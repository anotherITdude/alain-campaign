import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSwiperSlide } from "swiper/react";
import slides from "../../data/slides.json"
import Image from 'next/image'
import Link from 'next/link'

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
  // const myMouseOver = document.getElementById('1');
  // myMouseOver.addEventListener("mouseover", hover);
  //  function hover() {
  //   myMouseOver.dispatchEvent(mouseoverEvent);
  // }
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
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              
              <SwiperSlide key={slide.slideId}>
                <Link href='#cook' >
                <div id={slide.slideId} className="slide__area group duration-500 ease-in-out">
                  <p className="slide__heading block md:invisible md:group-hover:visible">{slide.title}</p>
                  <p className="slide__weight block md:invisible md:group-hover:visible">{slide.weight}</p>
                  <Image priority="blur" className="image group-hover:scale-110" src={slide.img} width={250} height={180} alt={slide.title} />
                  <p className="slide__desc block md:invisible md:group-hover:visible">{slide.body}</p>
                  </div>
                  </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
