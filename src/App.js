import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Heading';
import Home from './component/Home';
import About from './component/About';
import Info from './component/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Info />
    </div>
  );
}

export default App;
