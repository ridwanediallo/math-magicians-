import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navigate from './components/Navigate';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <Navigate />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </>
  );
}
export default App;
