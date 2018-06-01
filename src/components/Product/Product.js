import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            editing: false
        })
    }

    buttonEdit = () => {
        this.setState({ editing: true });
    }

    buttonSave = () => {
        this.setState({ editing: false });
        this.props.edit( this.props.index, this.txtName.value )
        console.log(this.txtName.value)
    }

    buttonDelete = () => {
        this.props.delete(this.props.index);
    }

    renderNormal = () => {
        return  <div>
                    <button onClick={ () => this.buttonEdit() }>Edit</button>
                    <button onClick={ () => this.buttonDelete() }>Delete</button>
                </div>
    }

    renderForm = () => {
        return <div>
                    <input type="text" ref={ (input) => { this.txtName = input } } defaultValue={ this.props.name }/>
                    <button onClick={ () => this.buttonSave() }>Save</button> 
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
                <br/>
                {this.props.name} <br/>
                ${this.props.price} <br/>
                {this.props.hot} <br/>
                <img style={{width: '300px', height: '300px'}} 
                    src={this.props.image} alt=""/> <br/><br/>
                {this.show_button()}
            </div>
        );
    }
}

export default Product;