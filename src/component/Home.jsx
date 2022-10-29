import React from "react";
import mobil from "../assets/home/mobilbg.svg";
import arrow from "../assets/home/arrow.svg";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className='bg-abu rounded-b-[64px]' id='Home'>
            <div className='max-w-[1240px] h-[50%] mx-4 lg:mx-auto'>
                <div className="flex">
                    <div className='py-20 md:py-40 text-white font-poppins grid grid-row-2 gap-5'>
                        <h1 className=' max-w-3xl font-bold text-2xl lg:text-7xl'>Lorem <span className='text-orange'>Ipsum Dolor</span>{" "}<p>sit Amet, </p><p>Consectur</p></h1>
                    <div className="text-[10px] lg:text-[16px]">        
                        <p className="max-w-[65%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tempus egestas praesent proin cum quis lectus tempus. </p>
                    </div>
                    </div>
                    
                    <img class="top-[-20px] sm:top-[-20px] md:top-[56px] lg:top-[56px] absolute right-[-140px] sm:right-[-140px] md:right-[-100px] lg:right-0 scale-[0.35] sm:scale-[0.35] md:scale-75 lg:scale-100 " src={mobil} alt=""></img>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="Daftarmobil" spy={true} smooth={true}>
                        <button className=" mb-10">
                            <img className="mx-auto animate-bounce cursor-pointer" src={arrow} alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home