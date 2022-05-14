import logo from './logo.svg';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import {bubbleSort, mergeSort, quickSort} from './SortingAlgorithms.js';
import ArraySeriesVisualization from './ArraySeriesVisualization.js';

function ArraySorterFunc(props) { 

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
    
  let startingArray = shuffleArray(create_normally_distributed_array(50, 10, 1));
  sortingHistory.push([...startingArray]); 

  let sortingFunction = bubbleSort;
  if (props.algorithm == "MergeSort") {
        sortingFunction = mergeSort;
  }
  else if (props.algorithm == "QuickSort") {
	sortingFunction = quickSort;
  }

  sortingFunction(startingArray, recordSortingSnapshot);

    return  <div className="ArraySorter">
		<ArraySeriesVisualization sortingHistory={sortingHistory}> </ArraySeriesVisualization>
 	    </div>
  }


export default ArraySorterFunc;
