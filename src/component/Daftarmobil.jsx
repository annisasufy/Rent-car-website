import React, {useEffect, useRef, useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import {AiOutlineClose} from 'react-icons/ai'
import '../assets/daftarmobil/datamobil.js';
import { DataMobil } from "../assets/daftarmobil/datamobil.js";
import gambar_sit from '../assets/daftarmobil/gambar_sit.svg';
import gambar_bbm from '../assets/daftarmobil/gambar_bbm.svg';
import gambar_cc from '../assets/daftarmobil/gambar_cc.svg';
import gambar_transmisi from '../assets/daftarmobil/gambar_transmisi.svg';

function KonversiHarga(item){
    let harga;
    if(item>=1000 && item<999999)
    {
        harga = item/1000;
        harga = harga.toString()+"K";
    }else if(item>=1000000){
        harga = item/1000000;
        harga = harga.toString()+"Juta";
    }else{

    }
    return harga;
}

function BrandTipe(brand,tipe){
    var title;
    title = brand + " " + tipe;
    return title;
}


const Daftarmobil = () => {
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);


    //CLOSE KETIKA KLIK DI LUAR POP UP
    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setpopuptogle(false);
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }


    //BUAT NAMPILIN POPUP
    const Changecontent = ({item}) => {
        const wrapperRef = useRef(null);
        useOutsideAlerter(wrapperRef);
        return(
            <div className="fixed inset-x-0 inset-y-0 h-full z-[30] overflow-auto ">
                <div  className="flex bg-black bg-opacity-50 h-full items-center">
                    <div ref={wrapperRef} className=" relative w-[350px] sm:w-fit mx-auto " id="myModal" >
                        <div className="p-7 w-[350px] lg:w-[430px] bg-white rounded-3xl">
                            <div className="flex justify-between"> 
                                <div className="flex font-bold text-xl justify-start">
                                    <h1>{BrandTipe(item.brand,item.tipe)}</h1>
                                </div>
                                <div className='rounded-full'>
                                    <button onClick={()=> {setpopuptogle(false)}} className=""><AiOutlineClose size={20}/></button>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5">
                                <div className="flex mt-3 mb-2 justify-center w-3/5">
                                    <img className="object-contain" src={item.gambar} alt={item.title}/>
                                </div>
                                <div className="w-1/3 flex flex-col justify-around items-center gap-7 text-[7px] text-[#A9A9A9] my-10 ">
                                    <div className="flex gap-7">
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_sit} alt={item.sit}/>
                                            <p>{item.sit} orang</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_bbm} alt={item.bbm}/>
                                            <p>{item.bbm}</p>
                                        </div >
                                    </div>
                                    <div className="flex gap-7">
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_cc} alt={item.cc}/>
                                            <p>{item.cc} CC</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_transmisi} alt={item.transmisi}/>
                                            <p>{item.transmisi}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <h1 className="text-sm lg:text-lg font-bold">{item.detHarga1}<span className="text-[8px] lg:text-xs font-normal">{item.ketHarga1}</span></h1>
                                <h1 className="text-sm lg:text-lg font-bold">{item.detHarga2}<span className="text-[8px] lg:text-xs font-normal">{item.ketHarga2}</span></h1>
                                <h1 className="text-sm lg:text-lg font-bold">{item.detHarga3}<span className="text-[8px] lg:text-xs font-normal">{item.ketHarga3}</span></h1>
                                <h1 className="text-sm lg:text-lg font-bold">{item.detHarga4}<span className="text-[8px] lg:text-xs font-normal">{item.ketHarga4}</span></h1>
                            </div>
                            <p className="font-poppins my-2 text-sm">{item.deskripsi}</p>
                            <a href="http://wa.me/6281239036266">
                            <button className="bg-orange w-full py-1 rounded-full font-bold shadow-[0px_0px_30px] shadow-[#FDF9DD] hover:text-orange duration-100 border-2 hover:border-orange border-white hover:bg-white">Rent Now!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        arrows: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
        <div className='pt-7  w-[340px] sm:w-[500px] md:w-[600px] lg:w-[1100px] mx-auto' id='Daftarmobil'>
            <div className="">
                <div className="text-center py-5  space-y-1 lg:space-y-2">
                    <h1 className="font-bold text-2xl lg:text-5xl text-abu">DAFTAR MOBIL</h1>
                    <p className="text-sm lg:text-[16px]">Pilih mobil yang sesuai dengan kebutuhan anda</p>
                </div>
                <div className="flex flex-col justify-center text-abu">
                    <Slider {...settings}>
                        {DataMobil.map((item) => (
                            <div className="flex flex-col relative ">
                                <div className="my-6 lg:my-9 px-7 pt-7 pb-10 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] rounded-3xl flex flex-col">
                                    <div className="flex font-bold text-xl justify-start ">
                                        <h1>{BrandTipe(item.brand,item.tipe)}</h1>
                                    </div>
                                    <div className="flex mt-3 mb-2 justify-center">
                                        <img src={item.gambar} alt={item.title}/>
                                    </div>
                                    <div className=" flex justify-center items-center gap-7 text-[10px] text-[#A9A9A9] text-center my-4">
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_sit} alt={item.sit}/>
                                            <p>{item.sit} orang</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_bbm} alt={item.bbm}/>
                                            <p>{item.bbm}</p>
                                        </div >
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_cc} alt={item.cc}/>
                                            <p>{item.cc} CC</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_transmisi} alt={item.transmisi}/>
                                            <p>{item.transmisi}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] lg:text-xs"><a className="text-2xl lg:text-2xl font-bold">Rp{KonversiHarga(item.harga)}</a>/ {item.ketHarga}</p>
                                        <a href="http://wa.me/6282145951296">
                                            <button className="bg-orange py-1 px-2 lg:px-4 rounded-full text-[14px] lg:text-[15px] font-bold shadow-[0px_0px_30px] shadow-[#FDF9DD] hover:text-orange duration-100 border-2 hover:border-orange border-white hover:bg-white">Rent Now!</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex">
                                <a className="absolute inset-x-0 bottom-1 lg:bottom-4">
                                            <div className="flex justify-center">
                                                <button onClick={()=> {
                                                    setpopupcontent(item);
                                                    setpopuptogle(true);
                                                }} 
                                                    className="bg-abu text-sm text-white font-bold py-3 px-4 rounded-full">Klik Untuk Lebih Detail</button>
                                            </div>
                                        </a>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* INI BAGIAN NAMPILIN POPUP, KALAU DI KLIK TAMPIL POPUP KALAU NDAK GAK NGAPA-NGAPAIN */}
                <div className=" w-[340px] sm:w-[500px] md:w-[600px] lg:w-[1100px]">
                { 
                        popuptogle ? <Changecontent item={popupcontent} /> : <div/>
                }
                </div>
            </div>
        </div>
    )
}


export default Daftarmobil
