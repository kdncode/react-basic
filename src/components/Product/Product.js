import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            editing : false
        })
    }

    renderNormal = () => {
        return  <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
    }

    renderForm = () => {
        return <div>
                    <button>Save</button> 
               </div>
    }

    show_button = () => {
        if (this.state.editing === false) {
            return this.renderNormal();
        } else {
            return this.renderForm();
        }
    }
    
    render() {
        return (
            <div>
                My Product <br/>
                {this.show_button()}
            </div>
        );
    }
}

export default Product;