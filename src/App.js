import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Info from './component/Info';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how_it_work" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
