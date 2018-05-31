import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from '../Parent/Parent';
import Product from '../Product/Product';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>

				{/* Parent Comp */}
				<Parent name="John Wick"/>
				<hr />
				<Product name="iPhone X" />
			</div>
		);
	}
}



export default App;
