import React from "react";
import mobil from "../assets/home/hiace.svg";
import arrow from "../assets/home/arrow.svg";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className='flex flex-col bg-abu rounded-b-[40px] lg:rounded-b-[64px]' id='Home'>
            <div className="mt-10 flex flex-row justify-between">
                <div className='max-w-[1240px] h-[50%] lg:mx-auto'>
                    <div className="flex px-6">
                        <div className='py-[50px] md:pt-20 lg:pt-40  text-white  grid grid-row-2 gap-3 lg:gap-5'>
                            <h1 className=' max-w-3xl font-bold text-2xl lg:text-7xl'>Make <span className='text-orange'>Your Trip</span>{" "}<p>Enjoyable</p></h1>
                        
                        </div>
                    </div>

                </div>
                <img class="w-1/2 md:w-[40%] lg:w-[30%]" src={mobil} alt=""></img>
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