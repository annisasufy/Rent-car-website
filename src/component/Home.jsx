import React from "react";
import mobil from "../assets/home/hiace.svg";
import arrow from "../assets/home/arrow.svg";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className='flex flex-col bg-abu rounded-b-[40px] lg:rounded-b-[64px]' id='Home'>
            <div className="mt-10 lg:mt-0 flex flex-row justify-between">
                <div className='max-w-[1100px] h-[50%] my-auto md:ml-7 lg:ml-20'>
                    <div className="pl-6 w-1/2">
                        <div className='py-[50px] md:pt-20 lg:pt-40  text-white  grid grid-row-2 gap-3 lg:gap-5'>
                            <h1 className=' max-w-3xl uppercase font-bold font-montserrat italic  text-2xl sm:text-4xl md:text-5xl lg:text-7xl'>Make <span className='text-orange'>Your Trip</span>{" "}<p>Enjoyable</p></h1>
                        
                        </div>
                    </div>
                </div>
                <img class="absolute top-16 right-0 w-1/2 sm:w-[40%] lg:w-[30%]" src={mobil} alt=""></img>
            </div>
            <div className="flex justify-center items-center">
                    <Link to="Daftarmobil" spy={true} smooth={true} offset={-20}>
                        <button className=" mb-6 lg:mb-10">
                            <img className="mx-auto animate-bounce cursor-pointer " src={arrow} alt="" />
                        </button>
                    </Link>
                </div>
        </div>
    )
}

export default Home