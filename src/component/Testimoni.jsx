import React from "react";
import { IoTerminalSharp, IoTimeSharp } from "react-icons/io5";
import { FaStar } from 'react-icons/fa'
import { dataTestimoni } from "../assets/testimoni/dataTestimoni";
import element from '../assets/testimoni/element.svg'

const Testimoni = () => {
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

    return (
        <div className='mt-20 md:my-20 h-[800px] md:h-40' id='Testimoni'>
            <h1 className='font-bold text-center text-3xl lg:text-5xl mb-11 stroke-2'>Testimoni <p className='font-normal text-sm'>Apa yang orang katakan kepada kami</p></h1>
            <div className='flex flex-col max-w-md md:max-w-[1240px] mx-auto'>
                <div className='z-10 grid grid-row-3 md:grid-cols-3 justify-items-center gap-10 mx-10'>
                    {dataTestimoni.map((item)=>(
                        <div className='p-10 rounded-2xl bg-white font-poppins text-[#777777] drop-shadow-2xl'>
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
                </div>
            </div>
        </div>
    )
}

export default Testimoni