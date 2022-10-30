import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Nav from './component/Nav';
import Daftarmobil from './component/Daftarmobil';
import Sk from './component/Sk';
import Testimoni from './component/Testimoni';
import Footer from './component/Footer';
import Whatsapp from './component/Whatsapp';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Navbar />
      <Home />
      <Daftarmobil/>
      <Sk/>
      <Testimoni/>
      <Footer/>
      <Whatsapp />
    </div>
  );
}

export default App;
