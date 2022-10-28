import React from 'react'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Daftarmobil from './component/Daftarmobil';
import Sk from './component/Sk';
import Testimoni from './component/Testimoni';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Daftarmobil/>
      <Sk/>
      <Testimoni/>
    </div>
  );
}

export default App;
