import React from "react";
import mobil from "../assets/home/mobilbg.svg";
import arrow from "../assets/home/arrow.svg";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className='bg-abu rounded-b-[64px]' id='Home'>
            <div className='max-w-[1240px] h-screen mx-auto'>
                <div className="flex">
                    <div className='py-40 text-white font-poppins grid grid-row-2 gap-5'>
                        <h1 className=' max-w-3xl font-bold text-7xl'>Lorem <span className='text-orange'>Ipsum Dolor</span> sit Amet, Consectur</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tempus egestas praesent proin cum quis lectus tempus. </p>
                    </div>
                    <img class="absolute right-0" src={mobil} alt=""></img>
                </div>
                <Link to="Daftarmobil" spy={true} smooth={true}>
                    <button >
                        <img className="mx-auto animate-bounce cursor-pointer" src={arrow} alt="" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home