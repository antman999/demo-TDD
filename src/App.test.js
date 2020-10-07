import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Dry up code to set up shallow function
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

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

test('Counter starts at 0', () => {});

test('Clicking on a button increments counter', () => {});
