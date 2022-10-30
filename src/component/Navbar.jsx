import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";
import logo from "../assets/navbar/logo.svg";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-abu">
            <div className="flex justify-between items-center mx-auto px-4 max-w-[1240px] text-white">
                <Link to="Home" spy={true} smooth={true}  >
                    <img class="py-1.5 w-[75%]" src={logo} alt=""></img>
                </Link>
                <ul className="hidden md:flex font-bold">
                    <li className="p-4 hover:text-orange duration-200">
                        <Link to="Home" spy={true} smooth={true} offset={-100}>Home</Link>
                    </li>
                    <li className="p-4 hover:text-orange duration-200">
                        <Link to="Daftarmobil" spy={true} smooth={true} offset={-100}>Daftar Mobil</Link>
                    </li>
                    <li className="p-4 hover:text-orange duration-200">
                        <Link to="Sk" spy={true} smooth={true} offset={-100}>S&K</Link>
                    </li>
                    <li className="p-4 hover:text-orange duration-200">
                        <Link to="Testimoni" spy={true} smooth={true} offset={-100}>Testimoni</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                <div className={!nav ? ' fixed md:hidden left-0 top-0 w-[60%] h-full bg-abu ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <img className='m-4 w-[50%]' src={logo} alt=""></img>
                    <ul className="pt-12 uppercase text-grey font-bold text-white ">
                        <li className="p-4 border-b border-white">
                            <Link to="Home" spy={true} smooth={true} offset={-100}>Home</Link>
                        </li>
                        <li className="p-4 border-b border-white">
                            <Link to="Daftarmobil" spy={true} smooth={true} offset={-100}>Daftar Mobil</Link>
                        </li>
                        <li className="p-4 border-b border-white">
                            <Link to="Sk" spy={true} smooth={true} offset={-100}>S&K</Link>
                        </li>
                        <li className="p-4">
                            <Link to="Testimoni" spy={true} smooth={true} offset={-100}>Testimoni</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;