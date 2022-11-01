import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";
import logo from "../assets/navbar/logo_atas-removebg-preview.png";

const Navbar = () => {
    let [open,setOpen]=useState(false);

    let Links = [
        { name: "Home", link: "Home" },
        { name: "Daftar Mobil", link: "Daftarmobil" },
        { name: "S&K", link: "Sk" },
        { name: "Testimoni", link: "Testimoni" },
    ];

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
                <div className="md:flex items-center justify-between bg-abu md:px-10 px-7 text-white">
                    <div className='w-1/5 md:w-32'>
                        <img class="py-1.5 max-w-96" src={logo} alt=""></img> 
                    </div>

                    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
                    {!open ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
                    </div>

                    <ul className={`md:flex md:items-center  absolute bg-abu rounded-b-[20px] md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
                        {Links.map((link)=>(
                            <li className="p-2">
                                <button><Link className="hover:text-orange duration-500"  to={link.link} spy={true} smooth={true} offset={-45}>{link.name}</Link></button>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default Navbar;