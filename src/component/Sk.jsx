import React from "react";
import{dataSk} from "../assets/Sk/dataSk"
import mobil from "../assets/Sk/hiace2.svg";
import list from "../assets/Sk/list.svg";

const Sk = () => {
    return (
        <div className='pt-10 md:pt-14' id='Sk'>
            <h1 className='pt-5 pb-8 text-center font-bold text-2xl lg:text-5xl text-abu'>
                Keterangan
            </h1>
            <div className="bg-[#F7F7F7]">
                <div className='mx-8 py-5'>
                    <div className='flex gap-5 max-w-[1240px] mx-auto'>
                        <div className="flex flex-col lg:flex-row justify-between">    
                            <img class="hidden md:flex w-1/2 mx-auto" src={mobil} alt=""/>
                            <ul className="">
                                {dataSk.map((item)=>(
                                    <li className="flex gap-2 py-2 text-justify">
                                        <img src={list}/>
                                        <p>{item.desc}</p>
                                    </li>
                                ))}
                            </ul>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sk