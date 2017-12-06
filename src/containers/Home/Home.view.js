import React, { Component } from 'react';
import { connect } from 'react-redux';

import Jumbotron from '../../components/home/Jumbotron/Jumbotron.view';
import Search from '../../components/home/Search/Search.view'; 
import Locations from '../../components/home/Locations/Locations.view';

class Home extends Component {
    constructor() {
        super();
        this.state = { originalList: [],
                       cities: [],
                       currentLocations: [] 
                     }; 
        this.filterLocations = this.filterLocations.bind(this);       
    }
    
    // componentWillReceiveProps(nextProps) {
    //     this.filterLocations([], 1);   
    // }     

    filterLocations(cityIds, maxGuests) {
        let currentLocations = [];
        if (cityIds.length === 0) {
            this.props.locations.map((item, i) => { 
                if (maxGuests <= item.maxGuests) {
                    currentLocations.push(item);
                } 
                               
            });
        }
        else if (cityIds[0] != "NO_RESULTS") {
            this.props.locations.map((item, i) => {
                cityIds.map((id) => { 
                    if (id == item.cityID && maxGuests <= item.maxGuests) {
                        currentLocations.push(item);
                    } 
                });
            });
        }
        else {
            currentLocations[0] = "NO_RESULTS";
        }
        this.setState({currentLocations});
    }
    
    render() {
        let { currentLocations } = this.state;
        let { cities, locations } = this.props;
        let displayList = currentLocations.length == 0 ? locations : currentLocations;
        
        return (
            <div>
                <div className="mainContainer">
                    <Jumbotron/>
                    <Search cities={cities} handleSearch={this.filterLocations}/>
                    <Locations display={displayList}/>
                </div>                      
            </div>
        )
    }    
}

function mapStateToProps(state) {
	const { locations, cities } = state
	return {
		locations, cities		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		doSaveLocations: () => dispatch(saveLoactions()),
		doSaveCities: () => dispatch(saveCities()),
		doUpdateList: () => dispatch(updateList()),
		doUpdateSearch: () => dispatch(updateSearchFields())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);