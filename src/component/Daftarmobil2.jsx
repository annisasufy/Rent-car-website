import React, {useEffect, useRef, useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import '../assets/daftarmobil/datamobil.js';
import { DataMobil } from "../assets/daftarmobil/datamobil.js";
import gambar_sit from '../assets/daftarmobil/gambar_sit.svg';
import gambar_bbm from '../assets/daftarmobil/gambar_bbm.svg';
import gambar_cc from '../assets/daftarmobil/gambar_cc.svg';
import gambar_transmisi from '../assets/daftarmobil/gambar_transmisi.svg';
import gambar from '../assets/daftarmobil/gambarmobil.png'

function KonversiHarga(item){
    var harga;
    if(item>=1000)
    {
        harga = item/1000;
        harga = harga.toString()+"K";
    }else{
        harga=item;
    }
    return harga;
}


const Daftarmobil2 = () => {
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);


    //BUAT KALAU KLIK DILUAR POPUP
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
    const Changecontent = ({car}) => {
        const wrapperRef = useRef(null);
        useOutsideAlerter(wrapperRef);
        return(
            // INI GANTI BG AJA KLO PENGEN SELAIN TRANSPARANT
            <div  className="fixed block top-0 left-0 pt-96 w-full h-full z-[1000] overflow-auto bg-transparent">
                <div ref={wrapperRef} className="flex flex-col relative" id="myModal" >
                    <div className="my-6 lg:my-9 px-7 pt-7 pb-10 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] rounded-3xl">
                        <div className="flex font-bold text-xl justify-start">
                            <h1>{car.title} {car.id}</h1>
                        </div>
                        <div className="flex mt-3 mb-2 justify-center">
                            <img src={gambar} alt={car.title}/>
                        </div>
                        <div className=" flex justify-center items-center gap-7 text-[10px] text-[#A9A9A9] my-4">
                            <div className="flex flex-col items-center space-y-2">
                                <img src={gambar_sit} alt={car.sit}/>
                                <p>{car.sit} orang</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <img src={gambar_bbm} alt={car.bbm}/>
                                <p>{car.bbm}</p>
                            </div >
                            <div className="flex flex-col items-center space-y-2">
                                <img src={gambar_cc} alt={car.cc}/>
                                <p>{car.cc} CC</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <img src={gambar_transmisi} alt={car.transmisi}/>
                                <p>{car.transmisi}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[10px] lg:text-xs"><a className="text-xl lg:text-2xl font-bold">Rp{KonversiHarga(car.harga)}</a>/Per Hari</p>
                            <button className="bg-orange py-1 px-2 lg:px-4 rounded-full text-[12px] lg:text-[14px] font-bold shadow-[0px_0px_30px] shadow-[#FDF9DD] hover:text-orange duration-100 border-2 hover:border-orange border-white hover:bg-white">Rent Now!</button>
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

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
        <div className=' w-[340px] lg:w-[1100px] mx-auto' id='Daftarmobil2'>
            <div className="">
                <div className="text-center py-5 lg:py-16  space-y-1 lg:space-y-2">
                    <h1 className="font-bold text-2xl lg:text-5xl text-abu">DAFTAR MOBIL</h1>
                    <p className="text-sm lg:text-[16px]">Pilih mobil yang sesuai dengan kebutuhan anda</p>
                </div>
                <div className="flex flex-col justify-center text-abu">
                    {/* INI DISINI BUAT BIKIN CARD2 NYA*/}
                    <Slider {...settings}>
                        {DataMobil.map((car) => {
                            return(
                            <div className="flex flex-col relative " key={car.id}>
                                <div className="my-6 lg:my-9 px-7 pt-7 pb-10 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] rounded-3xl">
                                    <div className="flex font-bold text-xl justify-start">
                                        <h1>{car.title}</h1>
                                    </div>
                                    <div className="flex mt-3 mb-2 justify-center">
                                        <img src={gambar} alt={car.title}/>
                                    </div>
                                    <div className=" flex justify-center items-center gap-7 text-[10px] text-[#A9A9A9] my-4">
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_sit} alt={car.sit}/>
                                            <p>{car.sit} orang</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_bbm} alt={car.bbm}/>
                                            <p>{car.bbm}</p>
                                        </div >
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_cc} alt={car.cc}/>
                                            <p>{car.cc} CC</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <img src={gambar_transmisi} alt={car.transmisi}/>
                                            <p>{car.transmisi}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[10px] lg:text-xs"><a className="text-xl lg:text-2xl font-bold">Rp{KonversiHarga(car.harga)}</a>/Per Hari</p>
                                        <button className="bg-orange py-1 px-2 lg:px-4 rounded-full text-[12px] lg:text-[14px] font-bold shadow-[0px_0px_30px] shadow-[#FDF9DD] hover:text-orange duration-100 border-2 hover:border-orange border-white hover:bg-white">Rent Now!</button>
                                    </div>
                                <div className="flex">
                                        <a className="absolute inset-x-0 bottom-1 lg:bottom-4">
                                            <div className="flex justify-center">
                                                {/* HARUSNYA onClick nya ini nnti yg nentuin 'car' mana yg mau dikirim ke Modal */}
                                                <button onClick={()=> {
                                                    setpopupcontent(car);
                                                    setpopuptogle(true);
                                                }} 
                                                    className="bg-abu text-sm text-white font-bold py-3 px-4 rounded-full">Klik Untuk Lebih Detail</button>
                                            </div>
                                        </a>
                                </div>
                                </div>
                            </div>
                            );
                        })}
                    </Slider>
                </div>
                {/* INI BAGIAN NAMPILIN POPUP, KALAU DI KLIK TAMPIL POPUP KALAU NDAK GAK NGAPA-NGAPAIN */}
                {
                    popuptogle ? <Changecontent car={popupcontent} /> : <div/>
                }
                <div>
                                {/* <div className="rounded-full bg-orange"><button onClick={changecontent}>X</button></div> */}
                                
                                {/* 'car' kiriman dari card tadi harusnya masuk ke sini lwt popupcontent */}
                                {/* <ul className="fixed bg-white pt-10">
                                    {popupcontent.map((item)=>(
                                        <div className="flex flex-col relative ">
                                        <div className="my-6 lg:my-9 px-7 pt-7 pb-10 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] rounded-3xl">
                                            <div className="flex font-bold text-xl justify-start">
                                                <h1>{item.title}</h1>
                                            </div>
                                            <div className="flex mt-3 mb-2 justify-center">
                                                <img src={gambar} alt={item.title}/>
                                            </div>
                                            <div className=" flex justify-center items-center gap-7 text-[10px] text-[#A9A9A9] my-4">
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
                                            <div className="flex justify-between">
                                                <p className="text-xs"><a className="text-2xl font-bold">Rp{KonversiHarga(item.harga)}</a>/Per Hari</p>
                                                <button className="bg-orange py-1 px-4 rounded-full text-lg font-bold">Rent Now!</button>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </ul> */}
                </div>
            </div>
        </div>
    )
}


export default Daftarmobil2