import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>learn react</h1>
      <div data-test='component-app'>
        <h3 data-test='counter-display'>Counter: 0</h3>
        <button data-test='button'>Click ME!</button>
      </div>
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