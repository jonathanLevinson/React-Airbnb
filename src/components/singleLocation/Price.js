import React, {Component} from 'react';

export default class Price extends Component {
    render() {
        return (
            <div className="priceBig">
                <span className="price">{this.props.price}</span>
                <span>&nbsp;</span>
                <p>per night</p>
            </div>
        )
    }
}