import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Daftarmobil from './component/Daftarmobil';
import Sk from './component/Sk';
import Footer from './component/Footer';
import Whatsapp from './component/Whatsapp';
import Tes from './component/Tes';

function App() {
  return (
    <div>
      <div className='flex'>
        <div className='z-30'>
          <Navbar />
        </div>
      </div>
      <Home />
      <div className='flex justify-center'>
        <div className='z-20'>
          <Daftarmobil/>
        </div>
      </div>
      <Sk/>
      <Tes/>
      <Footer/>
      <div className='flex'>
        <div className='z-30'><Whatsapp /></div>
      </div>
    </div>
  );
}

export default App;
