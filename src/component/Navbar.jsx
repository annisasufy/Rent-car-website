import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll";
import logo from "../assets/navbar/logo.svg";

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
                    <div >
                        <img class="py-1.5 max-w-96" src={logo} alt=""></img> 
                    </div>

                    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {!open ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
                        {/* ion-icon name={open ? 'close':'menu'}></ion-icon> */}
                    </div>

                    {/* <div>
                        <button className="focus:outline-none text-white block md:hidden">
                            <div>
                                <AiOutlineMenu size={20}/>
                            </div>
                        </button>
                    </div> */}

                    <ul className={`md:flex md:items-center  absolute md:static bg-abu rounded-b-[40px] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
                        {Links.map((link)=>(
                            <li className="p-2">
                                <button><Link className="hover:text-orange duration-500"  to={link.link} spy={true} smooth={true} offset={5}>{link.name}</Link></button>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>

        // <div className="bg-abu">
        //     <div className="flex  justify-between items-start mx-auto px-4 max-w-[1240px] text-white">
        //         <div className="" >
        //         <Link to="Home" spy={true} smooth={true}  >
        //             <img class="py-1.5 max-w-96" src={logo} alt=""></img>
        //         </Link>
        //         <ul className="hidden md:flex font-bold ">
        //                 {Links.map((link)=>(
        //                     <li className="p-4">
        //                         <button><Link className="hover:text-orange duration-200"  to={link.link} spy={true} smooth={true} offset={5}>{link.name}</Link></button>
        //                     </li>
        //                 ))}
        //         </ul>
        //         </div>
        //         <div className={!nav ? 'md:hidden left-0 top-0 w-[60%] h-fit bg-abu ease-in-out duration-500' : 'fixed top-[-100%]'}>
        //             {/* <img className='m-4 w-[50%]' src={logo} alt=""></img> */}
                    // <ul className="font-bold text-white">
                    //     {Links.map((link)=>(
                    //         <li className="p-4">
                    //             <button><Link className="hover:text-orange duration-200"  to={link.link} spy={true} smooth={true} offset={5}>{link.name}</Link></button>
                    //         </li>
                    //     ))}
                    // </ul>
        //         </div>
        //         </div>
        //         <div onClick={handleNav} className='block md:hidden'>
        //             {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        //         </div>
            
        // </div>
    )
}

export default Navbar;