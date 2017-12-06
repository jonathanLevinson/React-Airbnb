import React, {Component} from 'react';

export default class Book extends Component {
    render() {
        let options = [];
        if (this.props.guests) {
            options[0] = <option value="1">1 guest</option>;
            for (let i = 1; i < this.props.guests; ++i) {
                options[i] = <option value={i + 1}>{i + 1} guests</option>;
            }
        }
        
        return (
            <div className = "bookContainer">
                <div className = "bookInner">
                    <div className = "dates">
                        <div className = "checkIn">
                            <label>Check In</label>
                            <input type="date"/>
                        </div>
                        <div className = "checkOut">
                            <label>Check Out</label>
                            <input type = "date"/>
                        </div>
                    </div>
                    <div className = "guests">
                        <label>Guests</label>
                        <select>
                            {options}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}