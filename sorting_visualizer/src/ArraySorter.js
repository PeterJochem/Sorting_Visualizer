import logo from './logo.svg';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import {bubbleSort, mergeSort} from './SortingAlgorithms.js';

class ArraySorter extends React.Component {
  constructor() {
    super();
    this.state = {array: this.shuffleArray(this.create_normally_distributed_array(500, 50, 1))};
    this.timeout = 250; // 2.5 seconds
    this.updateTimeout = setTimeout(() => this.update(), this.timeout);
    this.sortingHistory = [];
    this.displayedIndex = 0;
    
    this.recordSortingSnapshot = this.recordSortingSnapshot.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.getDisplayArray = this.getDisplayArray.bind(this);
    
    //bubbleSort(this.state.array, 0, this.state.array.length, this.recordSortingSnapshot);
    mergeSort(this.state.array, this.state.array, 0, this.recordSortingSnapshot);
  }

  update = () => {
	// Need to change the state so it calls render again
	this.setState({array: []});
	this.displayedIndex += 1;
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

  recordSortingSnapshot(array) {
	this.sortingHistory.push([...array]);
  }

  shuffleArray(array) {
  	return array.sort(() => Math.random() - 0.5);
  };
  
  getDisplayArray() {
	if (this.sortingHistory.length === 0) {
	 	return [];
	}
	else if (this.displayedIndex >= this.sortingHistory.length) {
	 	return this.sortingHistory[this.sortingHistory.length - 1]; 
	 }
	 else {
		return this.sortingHistory[this.displayedIndex];
	 }
  }


  render() {
    return  <div className="ArraySorter">
          <ArrayVisualization array={this.getDisplayArray()} />
	</div>
;
  }
}


export default ArraySorter;
