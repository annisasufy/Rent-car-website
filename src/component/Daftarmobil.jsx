import React from "react";
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

const Daftarmobil = () => {
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
        <div className='max-w-[70%] mx-auto' id='Daftarmobil'>
            <div className="">
                <div className="text-center py-16  space-y-2">
                    <h1 className="font-bold text-2xl lg:text-5xl text-abu">DAFTAR MOBIL</h1>
                    <p className="text-[10px] lg:text-[16px]">Pilih mobil yang sesuai dengan kebutuhan anda</p>
                </div>
                <div className=" text-abu">
                    <Slider {...settings}>
                        {DataMobil.map((item) => (
                            <div className="flex flex-col">
                                <div className="my-9 px-7 pt-7 pb-10 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] rounded-3xl">
                                    <div className="flex font-bold text-xl justify-start">
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className="flex mt-3 mb-2 justify-center">
                                        <img src={gambar} alt={item.title}/>
                                    </div>
                                    <div className=" flex justify-center items-center gap-7 text-[10px] text-[#A9A9A9] my-2">
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
                                        <button className="bg-orange py-1 px-2 rounded-full text-lg font-bold">Rent Now!</button>
                                    </div>
                                </div>
                                <div  className="absolute bottom-4 bg-abu text-sm text-white font-bold py-3 px-4 rounded-full">
                                    <p>Klik Untuk Lebih Detail</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default Daftarmobil