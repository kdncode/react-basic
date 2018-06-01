import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('Init');
    }

    
    componentWillMount() {
        console.log('Will ');
    }

    componentDidMount() {
        console.log('Did');
    }
    
    
    
    render() {
        console.log('Render');
        return (
            <div>
                Lifecycle
            </div>
        );
    }
}

export default Lifecycle;
