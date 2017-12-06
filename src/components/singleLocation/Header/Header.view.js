import React, {Component} from 'react';
import Rating from '../../shared/Rating/Rating.view';

export default class Header extends Component {
    constructor() {
        super();
        this.currentLocation = {};
    }

    componentWillUpdate(nextProps) {
        this.currentLocation = nextProps.currentLocation;        
    }

    render() {
        return (
            <div className="locationHeader">
                <h2>{this.currentLocation.locationName}</h2>
                <div className="subHeader">
                    <span>{this.currentLocation.cityName}, {this.currentLocation.countryName}</span>
                    <span>&ensp;</span>
                    <Rating rating={this.currentLocation.rating}/>
                    <span>&ensp;</span>
                    <span> {this.currentLocation.ratingCount} Reviews</span>
                </div>
                <hr></hr> 
            </div>
        )
    }

}