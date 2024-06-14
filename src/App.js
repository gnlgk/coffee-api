import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/section/Header';
import Footer from './components/section/Footer';

import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:coffeeId" element={<MenuPage />} />
          <Route path="/search/:searchId" element={<SearchPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
