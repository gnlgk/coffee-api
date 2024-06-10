import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import Caffebene from './pages/Caffebene';
import Canbus from './pages/Canbus';
import Coffeebanhada from './pages/Coffeebanhada';
import Coffeebay from './pages/Coffeebay';
import Compose from './pages/Compose';
import Dessert39 from './pages/Dessert39';
import Ediya from './pages/Ediya';
import Gurunaru from './pages/Gurunaru';
import Hollys from './pages/Hollys';
import Mammoth from './pages/Mammoth';
import Paiks from './pages/Paiks';
import Starbucks from './pages/Starbucks';
import Theventi from './pages/Theventi';
import Tomntom from './pages/Tomntom';

import Header from './components/section/Header';
import Footer from './components/section/Footer';

const App = () => {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:coffeeId" element={<MenuPage />} />
        <Route path='/caffebene' element={<Caffebene />} />
        <Route path='/canbus' element={<Canbus />} />
        <Route path='/coffeebanhada' element={<Coffeebanhada />} />
        <Route path='/coffeebay' element={<Coffeebay />} />
        <Route path='/compose' element={<Compose />} />
        <Route path='/dessert39' element={<Dessert39 />} />
        <Route path='/ediya' element={<Ediya />} />
        <Route path='/gurunaru' element={<Gurunaru />} />
        <Route path='/hollys' element={<Hollys />} />
        <Route path='/mammoth' element={<Mammoth />} />
        <Route path='/paiks' element={<Paiks />} />
        <Route path='/starbucks' element={<Starbucks />} />
        <Route path='/theventi' element={<Theventi />} />
        <Route path='/tomntom' element={<Tomntom />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )

}

export default App
