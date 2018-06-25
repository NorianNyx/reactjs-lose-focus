/**
 * Root Index
 * 
 * This is where we set up Redux and render our
 * main App component.
 * 
 * Documentation on redux can be found here:
 * https://redux.js.org/
 * 
 * If we want to set up a router, this is where
 * it should be done.
 * 
 * Documentation on react-router-redux can be found here:
 * https://github.com/reactjs/react-router-redux
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/App';
import configureStore from './configureStore';

// This is where our store is created, it is then
// passed to our Provider.
const store = configureStore();

//----Render----//
ReactDOM.render(
    // Redux requires a Provider to be wrapped around
    // the main App component.
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
