import logo from './logo.svg';
import ArrayVisualization from './ArrayVisualization.js';
import React, { useState, useEffect } from 'react';
import NormalDistribution from 'normal-distribution';
import {bubbleSort, mergeSort} from './SortingAlgorithms.js';

function ArraySeriesVisualization(props) { 

  const [displayArray, setDisplayArray] = useState([]);

  let chooseDisplayArray = function() {
	if (props.sortingHistory.length === 0) {
		return [];
	} 
	else if (props.sortingHistory.length === 1) {
	 	return props.sortingHistory[0];
	}
	else {
		return props.sortingHistory.shift();
	}
  }
  
  useEffect(() => {
    const timerID = setInterval(() => setDisplayArray(chooseDisplayArray()), 100)
    return () => {
      clearInterval(timerID)
    }
  }, [props])
  
 
    return  <div className="ArraySeriesVisualization">
          <ArrayVisualization array={displayArray} />
	</div>
  }


export default ArraySeriesVisualization;
