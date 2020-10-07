import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})

test('Renders without errors', () => {
  const wrapper = shallow(<App />)
  //You want to use data-test (kinda like id or className will check if it rendered)
  //Why use new attribute? 
  //id and class have uses in apps so it might be changed for 
  //CSS or functionality 
  //Plus it wont be used in production 
})

test('Renders Button', () => {
  
})

test('Renders counter Display', () => {
  
})

test('Counter starts at 0', () => {
  
})

test('Clicking on a button increments counter', () => {
  
})
