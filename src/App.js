import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/home/home';
import Logement from './pages/logement/logement';
import About from './pages/about/about';
import NotFound from './pages/notfound/notfound';

//Layout
import Header from './layout/Header/header';
import Footer from './layout/Footer/footer';


function App() {
  return (
    <>
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
};
export default App;