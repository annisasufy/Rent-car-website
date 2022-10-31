import React from 'react';
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

const Modal = ({ open}) => {
  if (!open) return null;
  return (
    <div  className='overlay'>
        {DataMobil.map((item)=>(
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
                <div className="flex">
                    <a className="absolute inset-x-0 bottom-1 lg:bottom-4"><div className="flex justify-center"><button className="bg-abu text-sm text-white font-bold py-3 px-4 rounded-full">Klik Untuk Lebih Detail</button></div></a>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Modal;