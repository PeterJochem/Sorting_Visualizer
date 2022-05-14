import logo from './logo.svg';
import './App.css';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import ArraySorter from './ArraySorter.js';
import ArraySorterFunc from './ArraySorterFunc.js';
import Banner from './Banner.js';

let algorithms = ['BubbleSort', 'QuickSort', 'MergeSort'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {currentAlgorithm: algorithms[0]}; 
    this.setAlgorithm = this.setAlgorithm.bind(this);
    this.render = this.render.bind(this);
  }

  setAlgorithm(algorithmName) {
	 console.log(algorithmName);
	 this.setState({currentAlgorithm: algorithmName});	
  	 //this.forceUpdate(this.render);
  }

  render() {
    return  <div className="App">
		<Banner algorithms = {algorithms} setAlgorithm = {this.setAlgorithm}> </Banner>
				
		<ArraySorterFunc algorithm={this.state.currentAlgorithm} A={console.log("A")}>  </ArraySorterFunc> 
	</div>
;
  }
}


export default App;
