import React, {Component} from 'react';
import { connect } from 'react-redux';

import Jumbotron from '../../components/singleLocation/Jumbotron/Jumbotron.view';
import Header from '../../components/singleLocation/Header/Header.view';
import Description from '../../components/singleLocation/Description/Description.view';
import SideBar from '../../components/singleLocation/SideBar/SideBar.view';
import { getLocation } from '../../actions/getLocationsDataActions';

class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        props.doGetLocation(this.id);
    }    

    render() {
        let { currentLocation } = this.props; 
        console.log(currentLocation);
        debugger;

        return (
            <div className="locationPage">
                <Jumbotron img = {currentLocation.bigImageUrl}/>
                <div className = "mainContainer">
                    <div className = "locationDetails">
                        <div className = "left">
                            <Header currentLocation={currentLocation}/>
                            <Description description={currentLocation.description}/>
                        </div>
                        <div className="right">
                            <SideBar price = {currentLocation.price} guests = {currentLocation.maxGuests}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
	const { currentLocation } = state
	return {
		currentLocation		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		doGetLocation: (id) => dispatch(getLocation(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage)
