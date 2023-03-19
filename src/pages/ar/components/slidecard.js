
import React from 'react'
import { useSwiperSlide } from 'swiper/react';
import Image from 'next/image'




function Slidecard(props) {
    const swiperSlide = useSwiperSlide();
    return (
        <div className='testing'>
            {/* {swiperSlide.isActive ?
                <div className="">
                    <div className="text-center text-white font-gotham-bold ">
                <p className=" uppercase mt-[-22px]">
                    {props.slide.title}
                </p>
                <p className="mt-2">{props.slide.weight}</p>
                <div className="pl-3 pr-3">
                <Image src={props.slide.img} width={320} height={163} alt={props.slide.title} ></Image>
                </div>
                </div>
                </div>
                
            :
            <div>
                <div className="text-center">
                <div className="">
                <Image src={props.slide.img} width={120} height={89} alt={props.slide.title} ></Image>
                </div>
                </div>
            </div>
            } */}

        </div>
    );
}

export default Slidecard