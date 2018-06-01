import React, { Component } from 'react';
import Props from './Props'

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('Init')
        this.state = {
            component: 'Component Init',
            myName: 'Wick'
        };
    }

    componentWillMount() {
        this.setState({ component: 'Will'});
    }

    componentDidMount() {
        console.log('Did');
    }

    updateState = () => {
        this.setState({ component: 'New State'});
        this.setState({ myName: 'John'})
    }

    // Return False : Stop at ShouldUpdate or True
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should update ' + nextState.component);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Will update ' + nextState.component);
    }
    

    componentDidUpdate(prevProps, prevState) {
        console.log('Did update ' + prevState.component);
    }
    
    
    render() {
        console.log('Render')
        console.log(this.state.component);
        return (
            
            <div><br/>
                <Props name={this.state.myName} />

                <button onClick={ () => { this.updateState() }}>Update Lifecycle</button>
            </div>
        );
    }
}

export default Lifecycle;
