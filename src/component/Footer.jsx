import React from "react";
import {IoMailSharp} from 'react-icons/io5'
import {AiFillPhone} from 'react-icons/ai'
import logo from '../assets/navbar/logo.svg'

const Footer = () => {
    return (
        <div className='bg-abu rounded-t-[64px] xl:rounded-t-[200px] h-[700px] flex flex-col gap-3 justify-center items-center relative'>
            <img className='mt-24' src={logo} alt=''/>
            <p className='text-white text-center max-w-md'>Jl. taman baruna bouganville II no.04 Sari, Jimbaran, Kec. Kuta Sel., jimbaran, Bali 80361</p>
            <div className='flex text-white gap-2'>
                {<IoMailSharp size={20}/>}
                <p>info@sewahaicebali.com </p>
            </div>
            <div className='flex text-white gap-2'>
                {<AiFillPhone size={20}/>}
                <p>+62 82145951296</p>
            </div>
            <div className='w-full absolute text-center bg-orange bottom-0 font-poppins font-bold text-sm'>Copyright @ Sewa Haice Bali 2022. All Right Reserved</div>
        </div>
    )
}

export default Footer