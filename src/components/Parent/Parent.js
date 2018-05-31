import React, { Component } from 'react';
import Car from '../Car/Car';

class Parent extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			cars: ['Bonjour', 'hello'],
			myNum: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleRandom = this.handleRandom.bind(this);
	}

	handleChange () {
		this.setState( { cars: this.state.cars.reverse() })
	}

	handleRandom() {
		this.setState( { myNum: Math.floor(Math.random() * 100 ) } )
		console.log('clicked')
	}

	render() {
		return (
			<div>
				<h1>Hello World, {this.props.name}</h1>
				<button onClick={this.handleChange}>Change cars</button>
				<Car changes={this.state.cars}/>
				<button onClick={this.handleRandom}>Get random number</button>
				<Car myNum={this.state.myNum}/>
			</div>
		)
	}
}

export default Parent;