import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa'
import { dataTestimoni } from "../assets/testimoni/dataTestimoni";
import element from '../assets/testimoni/element.svg';
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import 'swiper/swiper.min.css'
// import 'swiper/components/scrollbar'
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import Slider from "react-slick";

const Tes = () => {
    function star(rating){
        return(
            <div className='flex'>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return(
                        <FaStar
                            color={ratingValue <= rating ? "#F7DD35" : "#A9A9A9"}/>
                    );
                })}
            </div>
        )
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        arrows: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className='mt-20 md:my-20 md:h-40 ' id='Testimoni'>
            <h1 className='font-bold text-center text-3xl lg:text-5xl mb-11 stroke-2'>Testimoni <p className='font-normal text-sm'>Apa yang orang katakan kepada kami</p></h1>
            <div className="flex">
                <div className="w-[340px] sm:w-[500px] md:w-[600px] lg:w-[1100px] max-w-[1024px] mx-auto z-10">
                    <Slider{...settings}>
                        {dataTestimoni.map((item)=>(
                            <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-orange/30  duration-300 p-10 rounded-2xl bg-white font-poppins text-[#777777] shadow-xl'>
                                <div className='grid grid-cols-2 justify-items-start'>
                                    <div className="flex gap-2">
                                        <img className='' src={item.photo} alt=''/>
                                        <div className='flex flex-col'>
                                            <h1 className='text-[#A9A9A9] font-bold'>{item.name}</h1>
                                            <div>{star(item.rate)}</div>
                                        </div>
                                    </div>
                                    <img className='justify-self-end' src={element} alt="" />
                                </div>
                                <p className='pt-2 text-sm text-justify'>{item.review}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
    </div>
  );
}

export default Tes