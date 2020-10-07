# TDD using jest and Enzyme 

Watch mode watches for changes an re renders and looks for the last commit 

## Enzyme vs ReactDOM
Enzyme has a better toolkit 
 Search thru the DOM 
 allows to click on node 


## Types of test 
 1. Unit testing - Test one piece of code (function)
 2. Integration - How multiple units work together 
 3. End to End - How a user interacts with the app 

## Testing goals 
- Test behavior not implemantion
- what the app should do instead of how it works 
- If implemantation changes test should still pass 
  
## Example 
clickCounter 

  TESTING BEHAVIOR :)
   -Set initial state 
   -Simulate button click
   -Check displayed count to see that it increased 

  TESTING IMPLEMENTATION X 
   -set initial state 
   -simulate click
   -check if the function was called 