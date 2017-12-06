import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { saveLocations, saveCities } from '../../actions/getLocationsDataActions';
import Header from '../../components/shared/Header/Header.view';
import Footer from '../../components/shared/Footer/Footer.view';
import About from '../../components/shared/About/About.view';
import Home from '../Home/Home.view';
import LocationPage from '../LocationPage/LocationPage.view';

// import css from './App.css';


class App extends Component {

	constructor(props) {
		super(props);
		props.doSaveLocations(0);
		props.doSaveCities();
	}

	render() {
		let { locations, cities } = this.props;
		
        return (
            <Router>				
                <div className="app"> 
					<Header/>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/locationPage/:id' component={LocationPage}/>					
					<Footer/>           
                </div>				
            </Router>
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
		doSaveLocations: (id) => dispatch(saveLocations(id)),
		doSaveCities: () => dispatch(saveCities()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
