import logo from './logo.svg';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import {bubbleSort, mergeSort} from './SortingAlgorithms.js';

let ArraySorterFunc = props => { 
 
  console.log("This ran");
  let sortingHistory = [];
  
  let create_normally_distributed_array = function(n, mean, std_dev) {
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

  let recordSortingSnapshot = function(array) {
	sortingHistory.push([...array]);
  } 

  let shuffleArray = function(array) {
  	return array.sort(() => Math.random() - 0.5);
  };
    
  let chooseDisplayArray = function() {
	
	console.log(sortingHistory.length);
	if (sortingHistory.length === 0) {
		return [];
	} 
	else if (sortingHistory.length === 1) {
	 	return sortingHistory[0];
	}
	else {
		return sortingHistory.shift();
	}
  }

  let startingArray = shuffleArray(create_normally_distributed_array(50, 10, 1));
  sortingHistory.push([...startingArray]); 
  const [displayArray, setDisplayArray] = useState(startingArray);
   
  let sortingFunction = bubbleSort;
  if (props.algorithmName === "MergeSort") {
        sortingFunction = mergeSort;
  }

  sortingFunction(startingArray, recordSortingSnapshot);
   
  let tick = function() {
	setDisplayArray(chooseDisplayArray());
  }

  useEffect(() => {
	
    const timerID = setInterval(() => tick(), 100)
    return () => {
      clearInterval(timerID)
    }
  }, [props])
 
    return  <div className="ArraySorter">
          <ArrayVisualization array={displayArray} />
	</div>
  }


export default ArraySorterFunc;
