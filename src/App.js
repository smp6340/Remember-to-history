import react, {Component, useState} from 'react';
import { Router } from 'react-router-dom';

//Component
import Background from './components/background';

//Page
import Home from './pages/Home';

function App() {
  return (  
    <>
      <Background />
      <Home />
    </>
  );
}

export default App;
