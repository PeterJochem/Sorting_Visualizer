import logo from './logo.svg';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';


class ArraySorter extends React.Component {
  constructor() {
    super();
    this.state = {array: this.create_normally_distributed_array(500, 50, 1)};
    this.timeout = 250; // 2.5 seconds
    this.updateTimeout = setTimeout(() => this.update(), this.timeout);
    this.sortingHistory = [];
    this.displayedIndex = 0;
    
    this.recordSortingSnapshot = this.recordSortingSnapshot.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.getDisplayArray = this.getDisplayArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);

    this.bubbleSort(this.state.array, 0, this.state.array.length, this.recordSortingSnapshot);
  }

  update = () => {
        //let newArray = this.create_normally_distributed_array(500, 50, 1);
        //newArray = this.shuffleArray(newArray);
        
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
  
  // Put this in a seperate file 
  // import the sortingFunction and pass a function to
  // update/record the intermediate states of the sorting
  bubbleSort(array, leftIndex, rightIndex, recordProgressFunc) {
	
	let span = rightIndex - leftIndex;
	if (span === 0) {
		return;
	}

	let subArray = array.slice(leftIndex, rightIndex + 1);
	let minValue = Math.min(...subArray);
        let indexOfMinValue = subArray.indexOf(minValue);
	let tmp = subArray[0];
	array[leftIndex + indexOfMinValue] = tmp;
	array[leftIndex] = minValue;

	recordProgressFunc(array);

	// then call bubbleSort on the array[1:]
	this.bubbleSort(array, leftIndex + 1, rightIndex, recordProgressFunc);	
  }
  
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
