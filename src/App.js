import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Nav from './component/Nav';
import Daftarmobil from './component/Daftarmobil';
import Sk from './component/Sk';
import Testimoni from './component/Testimoni';
import Footer from './component/Footer';
import Tes from './component/Tes';
import Whatsapp from './component/Whatsapp';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <div className='flex'>
        <div className='z-20'>
          <Navbar />
        </div>
      </div>
      <Home />
      <Daftarmobil/>
      {/* <Daftarmobil2/> */}
      <Sk/>
      {/* <Tes/> */}
      <Testimoni/>
      <Footer/>
      <Whatsapp />
    </div>
  );
}

export default App;
