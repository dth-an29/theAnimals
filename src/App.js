import React from 'react';
import './App.css';
import Header from './component/Heading';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
