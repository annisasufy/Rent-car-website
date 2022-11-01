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
                            <h1 className=' max-w-3xl font-bold text-2xl lg:text-7xl'>Lorem <span className='text-orange'>Ipsum Dolor</span>{" "}<p>sit Amet, </p><p>Consectur</p></h1>
                        <div className="text-[10px] lg:text-[16px]">        
                            <p className="max-w-[100%] lg:max-w-[65%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tempus egestas praesent proin cum quis lectus tempus. </p>
                        </div>
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