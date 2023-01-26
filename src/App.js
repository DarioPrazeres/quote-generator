import React, { createContext } from 'react';
import { useState } from 'react';
import RandomButton from './components/RandomButton';
import './App.css';

const ContContext = createContext();
export default function App() {

  const [cont, setCont] = useState(0);
  console.log(cont)
  return (
    <ContContext.Provider value={{ cont, setCont }}>
      <div className="App">
        <RandomButton cont={cont} setCont={setCont} />
        <h1>Dario Edgar Prazeres</h1>
      </div>
    </ContContext.Provider>
  );
}
export {ContContext}