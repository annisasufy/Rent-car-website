import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Daftarmobil from './component/Daftarmobil';
import Sk from './component/Sk';
import Testimoni from './component/Testimoni';
import Footer from './component/Footer';
import Whatsapp from './component/Whatsapp';

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
      <Testimoni/>
      <Footer/>
      <Whatsapp />
    </div>
  );
}

export default App;
