import logo from './logo.svg';
import './App.css';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import ArraySorter from './ArraySorter.js';
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
		
		{/* // ArraySorter should be a functional component that is regenerated every time the App's state changes
		// In ArraySorter, we can use an effect or update to slowly show different array visualizations */}
		<ArraySorter algorithm={this.state.currentAlgorithm} A={console.log("A")}>  </ArraySorter> 
	</div>
;
  }
}


export default App;
