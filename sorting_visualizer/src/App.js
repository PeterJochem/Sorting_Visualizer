import logo from './logo.svg';
import './App.css';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import ArraySorterFunc from './ArraySorterFunc.js';
import Banner from './Banner.js';

class App extends React.Component {
  constructor() {
    super();
    
    this.algorithms = ["BubbleSort", "QuickSort", "MergeSort"];
    this.state = {currentAlgorithm: this.algorithms[0]}; 
    this.setAlgorithm = this.setAlgorithm.bind(this);
    this.render = this.render.bind(this);
  }
  
  componentDidMount(){
    document.title = "Sorting Algorithms";
  }

  setAlgorithm(algorithmName) {
	 console.log(algorithmName);
	 this.setState({currentAlgorithm: algorithmName});	
  }

  render() {
    return  <div className="App">
		<Banner algorithms = {this.algorithms} setAlgorithm = {this.setAlgorithm}> </Banner>
		<ArraySorterFunc algorithm={this.state.currentAlgorithm}>  </ArraySorterFunc> 
	    </div>
;
  }
}

export default App;
