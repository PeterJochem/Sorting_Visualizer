import logo from './logo.svg';
import './App.css';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';


class App extends React.Component {
  constructor() {
    super();
    this.state = {array: this.create_normally_distributed_array(500, 50, 1)};
    this.timeout = 2500; // 2.5 seconds
    this.updateTimeout = setTimeout(() => this.update(), this.timeout);
  }

  update = () => {
        let newArray = this.create_normally_distributed_array(500, 50, 1);
        newArray = this.shuffleArray(newArray);
        this.setState({array: newArray});
	setTimeout(() => this.update(), this.timeout)	
  };

  create_normally_distributed_array(n, mean, std_dev) {
  	let array = [];
   	let normDist = new NormalDistribution(mean, std_dev);
   	let leftIndex = mean - 3 * std_dev;
	let rightIndex = mean + 3 * std_dev;
	let scaleFactor = 50; 
	for (let i = leftIndex; i < rightIndex; i = i + 0.1) {
        	array.push(normDist.pdf(i) * scaleFactor);
   	}
  	return array;
  };

  shuffleArray(array) {
   return array.sort( ()=>Math.random()-0.5 );
  };
  
  
  render() {
    return  <div className="App">
          <ArrayVisualization array={this.state.array} />
	</div>
;
  }
}


export default App;
