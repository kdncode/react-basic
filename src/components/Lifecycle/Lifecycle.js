import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('Init')
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

    updateState = () => {
        this.setState({ component: 'New State'})
    }

    // Return False : Stop at ShouldUpdate or True
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should update ' + nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Will update ' + nextState);
    }
    

    componentDidUpdate(prevProps, prevState) {
        console.log('Did update ' + prevState);
    }
    
    
    render() {
        console.log('Render')
        console.log(this.state.component);
        return (
            
            <div><br/>
                <button onClick={ () => { this.updateState() }}>Update Lifecycle</button>
            </div>
        );
    }
}

export default Lifecycle;
