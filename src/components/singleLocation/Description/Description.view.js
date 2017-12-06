import React, {Component} from 'react';

export default class Description extends Component {
    render() {
        return (
            <div className="description">
                <h3>About this Location</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}