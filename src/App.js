import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import SignIn from './components/sign/SignIn';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignIn />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
