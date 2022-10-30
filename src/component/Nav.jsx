import React from "react";
import logo from "../assets/navbar/logo.svg";
import { Link } from "react-scroll";

const Nav = () => {
    let Links = [
        { name: "Home", link: "Home" },
        { name: "Daftar Mobil", link: "Daftarmobil" },
        { name: "S&K", link: "Sk" },
        { name: "Testimoni", link: "Testimoni" },
    ];


    return(
        <div className="flex justify-center w-full mx-auto px-4 font-bold bg-abu text-white">
        {/* <div className="w-full fixed top-0 left-0"> */}
            <div className="w-[412px] lg:w-[1240px] flex flex-col lg:flex-row py-3 justify-between md:px-10 px-7">
                <div className="font-bold text-2xl flex text-white">
                <span className="text-3xl text-white">
                    <a className="">
                    <img class="" src={logo} alt=""></img>
                    </a>
                </span>
                </div>
                <ul className="absolute top-0 lg:flex lg:flex-row items-start lg:items-center justify-center space-x-0 lg:space-x-10 ">
                    {
                        Links.map((link)=>(
                            <li>
                                <button><Link className="hover:text-orange duration-200"  to={link.link} spy={true} smooth={true} offset={-100}>{link.name}</Link></button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

export default Nav