import React, {Component} from 'react';

export default class Jumbotron extends Component {
    render() {
        let path = ''; 
        if (this.props.img) {
            path = 'url(' + this.props.img + ')';
        }
        return (
            <div className="locationImage" style={{backgroundImage:path}}>                            
            </div>
        )
    }
}