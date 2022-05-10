import logo from './logo.svg';
import './App.css';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import ArraySorter from './ArraySorter.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return  <div className="App">
		<ArraySorter> </ArraySorter>	  
	</div>
;
  }
}


export default App;
