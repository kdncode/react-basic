import React, { Component } from 'react';

class Props extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps ' + nextProps.name);
        
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate ' + nextProps.name);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate ' + nextProps.name);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate ' + prevProps.name);
    }
    
    // Check index.js file as well.
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default Props;
