import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.cities = [];
        this.guests = 1;
        this.cityIds = [];
        this.refreshDisplay = props.handleSearch;
    }

    componentWillUpdate() {
        if (this.cities.length == 0) {
            this.cities = this.createOptionElement(this.props.cities);
        }
    }
    createOptionElement(cities) {
        return cities.map((city)=> { return <option value={city.cityName} key={city.cityID}></option> });
    }

    setGuests(ev) {
        this.guests = ev.target.value;
        this.refreshDisplay(this.cityIds, this.guests);
    }
    
    setCity(ev) {
        let input = ev.target.value.toLowerCase();
        this.cityIds = [];        
        if (input != "") {
            this.props.cities.map((city) => {
                let lowerCaseCityName = city.cityName.toLowerCase();
                if (lowerCaseCityName.includes(input)) {
                    this.cityIds.push(city.cityID);
                }
            });
            if (this.cityIds.length == 0) {
                this.cityIds.push("NO_RESULTS");
            }
        }
        this.refreshDisplay(this.cityIds, this.guests);
    }

    render() {
        // let relevantCities = this.filterCities(this.props.cities);
        return (
            <div className="search">
                <div className="where searchField">
                    <div>Where</div>
                    <input list="cities" placeholder="City" className="input" onInput={(ev) => this.setCity(ev)}></input>
                    <datalist id="cities">
                        {this.cities}
                    </datalist>
                </div>
                <div className="guests searchField">
                    <div>Guests</div>
                    <select onChange={(ev)=> this.setGuests(ev)} className="input">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>                
            </div>
        )
    }

}