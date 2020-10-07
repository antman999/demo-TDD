import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = React.useState(false);
  return (
		<div>
			<h1 data-test='counter-display'>learn react</h1>
			<h1 data-test='component-app'>
				counter: <span data-test='count'>{count}</span>
			</h1>
			<div
				data-test='error-message'
				className={`error ${error ? '' : 'hidden'}`}>
				The counter cannot go below 0
			</div>
			<button
				data-test='button'
				onClick={() => {
					if (error) {
						setError(false);
					}
					setCount(count + 1);
				}}>
				Click ME!
			</button>

			<button
				data-test='decrement'
				onClick={() => setCount(count > 0 ? count - 1 : setError(true))}>
				-
			</button>
		</div>
	);
}

export default App;

///Watch mode watches for changes an re renders and looks for the last commit 

//Enzyme vs ReactDOM
//Enzyme has a better toolkit 
 //Search thru the DOM 
 //allows to click on node 


 //Types of test 
  //Unit testing - Test one piece of code (function)
  //Integration - How multiple units work together 
  //End to End - How a user interacts with the app 

  //Testing goals 
  //Test behavior not implemantion
  // what the app should do instead of how it works 
  //If implemantation changes test should still pass 
  
  //Example 
  //clickCounter 

  //TESTING BEHAVIOR :)
   //Set initial state 
   //Simulate button click
   //Check displayed count to see that it increased 

  //TESTING IMPLEMENTATION X 
   //set initial state 
   //simulate click
   //check if the function was called 