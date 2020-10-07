import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Dry up code to set up shallow function
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
//We want to have a test for each test rather than having one test for multiple checks . It is better for documentation 
//Failure counts give better indication of state of code 
test('Renders without errors', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'component-app');
	expect(appComponent.length).toBe(1);
	//You want to use data-test (kinda like id or className will check if it rendered)
	//Why use new attribute?
	//id and class have uses in apps so it might be changed for
	//CSS or functionality
	//Plus it wont be used in production
});

test('Renders Button', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'button');
	expect(appComponent.length).toBe(1);
});

test('Renders counter Display', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'counter-display');
	expect(appComponent.length).toBe(1);
});

test('Counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("0")
});

test('Clicking on a button increments counter', () => {
  const wrapper = setup()
//find the button
const button = findByTestAttr(wrapper, 'button');
  //click the button
  button.simulate('click');
  //find the display and test that the numbers has incremented 
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe('1');
});

test('should show decrement buttton ', () => {
  const wrapper = setup()

  const button = findByTestAttr(wrapper, 'decrement')
  
  expect(button.length).toBe(1)

})

test('should decrease the counter when clicking', () => {
  
  const wrapper = setup()

  const button = findByTestAttr(wrapper, 'decrement')

  button.simulate('click');

  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe('0')
})




