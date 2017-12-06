import React, {Component} from 'react';

export default class Reservation extends Component {
    render() {
        return (
            <div className="reservation">
                <div className="locationDetails">
                    <img src={imageUrl}/>
                    <span>{name}</span>
                    <span>{city}, &nbsp; {country} </span>
                </div>
                <div className="duration">
                    <h3>{totalNights} Nights</h3>
                    <span>Check In</span>
                    <span>{checkIn}</span>
                    <span>Check Out</span>
                    <span>{checkOut}</span>
                </div>
                <div className="guests">
                    <h3>{guests} Guests</h3>
                    <span>{adults} Adults</span>
                    <span>{children} Children</span>
                    <span>{infants} Infants</span>
                </div>
            </div>
        )
    }
}