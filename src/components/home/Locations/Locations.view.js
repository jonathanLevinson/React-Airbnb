import React, {Component} from 'react';
import Location from '../Location/Location.view';

export default class Locations extends Component {
    render() {
        let locations 
        if (this.props.display[0] == "NO_RESULTS") {
            locations = <h4>No results</h4>
        }
        else {
            locations = this.props.display.map((item)=> <div className="singleLocation" key={item.locationID}> <Location current={item}/> </div>);
        }
            
        return (
            <div className="mainArea">
                <h2>Locations</h2>
                <div className="locationsContainer">
                    {locations}                
                </div>
            </div>
        )
    }
}