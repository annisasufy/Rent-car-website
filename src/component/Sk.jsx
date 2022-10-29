import React from "react";
import{dataSk} from "../assets/Sk/dataSk"
import mobil from "../assets/Sk/mobil.svg";
import list from "../assets/Sk/list.svg";

const Sk = () => {
    return (
        <div className='' id='Sk'>
            <h1 className='py-20 text-center font-[900] font-poppins text-3xl'>
                Syarat & Ketentuan <p className='font-normal text-sm'>Phasellus arcu in in tellus cursus ipsum dictum.</p>
            </h1>
            <div className='bg-[#F7F7F7] py-20'>
                <div className='flex gap-5 max-w-[1240px] mx-auto'>
                    <img class="" src={mobil} alt=""/>
                    <div className="grid">
                        {dataSk.map((item)=>(
                            <div className="flex gap-x-2 items-center">
                                <img src={list} alt=''/>
                                <p className="">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sk