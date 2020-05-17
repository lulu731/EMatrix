import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Panels from './components/panels/Panels';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Panels />
    </div>
  );
}

export default App;
