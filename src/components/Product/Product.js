import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                My Product <br/>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );
    }
}

export default Product;