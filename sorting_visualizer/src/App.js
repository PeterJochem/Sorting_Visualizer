import logo from './logo.svg';
import './App.css';
import Bar from './Bar.js';
import React, { useState } from 'react';

function App() {
   
  const [array, setArray] = useState(Array.from(Array(35).keys()));
  const [otherArray, setOtherArray] = useState(Array.from(Array(35).keys()));

  return (
    <div className="App">
	  <Bar array={array} otherArray={otherArray}/>
     </div>
  );
}

export default App;
