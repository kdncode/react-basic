import React, { Component } from 'react';

class Car extends Component {
    render() {
        return (
            <div>
                {/* <p>{this.props.changes.map((item, index) => {
					return <p key={index}> {item} </p>
				})}</p> */}
				<br />
				<div>
					{this.props.myNum}
				</div>
            </div>
        );
    }
}

export default Car;
