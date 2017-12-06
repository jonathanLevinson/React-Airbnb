import React, {Component} from 'react';
import Rating from '../../shared/Rating/Rating.view'
import {Link} from 'react-router-dom';

export default class Location extends Component {
    render() {
        let location = this.props.current;
        let path = '/locationPage/' + location.locationID;
        return (            
                <div className="">
                    <Link to={path}><img src={location.smallImageUrl}/></Link>
                    <div className="details">                        
                        <p><span className="price">{location.price}&nbsp;
                            </span><Link to={path}><span className="locationName">
                                 {location.locationName}</span></Link></p>
                        <div className="ratingSection">
                            <Rating rating={location.rating}/>
                            <p className="reviewsNumber">&nbsp; {location.ratingCount} Reviews</p>
                        </div>
                    </div>
                </div>
        )
    }
}