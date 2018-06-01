import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: 'Component Init'
        };
    }

    
    componentWillMount() {
        this.setState({ component: 'Will'});
    }

    componentDidMount() {
        console.log('Did');
    }
    
    
    
    render() {
        console.log(this.state.component);
        return (
            <div>
                Lifecycle
            </div>
        );
    }
}

export default Lifecycle;
