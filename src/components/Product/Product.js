import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            editing: false
        })
    }

    editChange = () => {
        this.setState({ editing: true })
    }

    saveChange = () => {
        this.setState({ editing: false })
    }

    renderNormal = () => {
        return  <div>
                    <button onClick={ this.editChange }>Edit</button>
                    <button onClick={ this.deleteChange }>Delete</button>
                </div>
    }

    renderForm = () => {
        return <div>
                    <input type="text" defaultValue={ this.props.name }/>
                    <button onClick={ this.saveChange }>Save</button> 
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
                {this.props.name} <br/>
                {this.show_button()}
            </div>
        );
    }
}

export default Product;