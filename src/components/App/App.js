import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from '../Parent/Parent';
import Product from '../Product/Product';
import Lifecycle from '../Lifecycle/Lifecycle';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			products: [
				{
					name: "Macbook Pro",
					price: "2999",
					image: "https://cnet2.cbsistatic.com/img/xHbwG-ptjWGIbakXxEY7E8PaJlM=/670x503/2017/01/18/c612458a-f48c-415a-86b3-9893dec431a4/logicpro-x-10-3-touch-bar.jpg",
					hot: true
				},
				{
					name: "iPad Pro",
					price: "499",
					image: "https://i.ytimg.com/vi/RJK3XVVodVQ/maxresdefault.jpg",
					hot: false
				},
				{
					name: "iPhone Pro",
					price: "999",
					image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fgordonkelly%2Ffiles%2F2018%2F01%2FVYiLqvPs.jpg",
					hot: true
				}
			]
		})
	}

	editNameProduct = (id, name) => {
		const arrProduct = this.state.products;
		arrProduct[id].name = name;
		this.setState({ products: arrProduct })
	}
	
	deleteProduct = (id) => {
		const arrProduct = this.state.products;
		arrProduct.splice(id, 1);
		this.setState({ products: arrProduct })
	}

	show_product = () => {
		const listProduct = this.state.products.map( (item, index) => 
			<Product key={index} index={index} name={ item.name } price={ item.price } 
					 image={item.image } hot={ item.hot }
					 edit={ (id, name) => this.editNameProduct(id, name) } 
					 delete={ (id) => this.deleteProduct(id) } 
			/>
		);
		return listProduct;
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Lifecycle />
				{/* Parent Comp */}
				<Parent name="John Wick"/>
				<hr />
				{ this.show_product() }
				<hr />
				
			</div>
		);
	}
}



export default App;
