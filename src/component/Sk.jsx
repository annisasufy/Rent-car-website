import React from "react";
import{dataSk} from "../assets/Sk/dataSk"
import mobil from "../assets/Sk/hiace2.svg";
import list from "../assets/Sk/list.svg";

const Sk = () => {
    return (
        <div className='pt-7 md:pt-20' id='Sk'>
            <h1 className='py-14 lg:py-16  text-center font-bold text-2xl lg:text-5xl text-abu'>
                Syarat & Ketentuan <p className='font-normal text-sm'>Phasellus arcu in in tellus cursus ipsum dictum.</p>
            </h1>
            <div className="bg-[#F7F7F7]">
                <div className='mx-8 py-5'>
                    <div className='flex gap-5 max-w-[1240px] mx-auto'>
                        <div className="flex flex-col lg:flex-row justify-between">    
                            <img class="hidden sm:flex w-1/2" src={mobil} alt=""/>                            
                                <div className="grid">
                                    {dataSk.map((item)=>(
                                        <div className="flex gap-x-2 items-center">
                                            <img src={list} alt=''/>
                                            <p className="text-justify">{item.desc}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sk