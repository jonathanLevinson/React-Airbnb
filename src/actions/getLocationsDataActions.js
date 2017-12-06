export const SAVE_LOCATIONS = 'SAVE_LOCATIONS';
export const SAVE_CITIES_LIST = 'SAVE_CITIES_LIST';
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';

export const saveLocations = (locationID) => {
   return (dispatch) => {
        console.log("Fetch locations database started");
        let path = '/api/locations/' + locationID;
        fetch(path).
            then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log('Fetch locations database complete' + data);
                dispatch({ type: SAVE_LOCATIONS, payload: data})
            })
            .catch(err => console.error(`fetch locations database operation failed: ${err.message}`));
    }    
};

export const saveCities = () => {
    return (dispatch) => {
        console.log('Fetch cities list started');
        fetch('/api/cities').
            then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log('Fetch cities list complete');
                dispatch( { type:SAVE_CITIES_LIST, payload: data});
            })
            .catch(err => console.error(`fetch cities list operation failed: ${err.message}`));
    }
};

export const getLocation = (locationID) => {
    return (dispatch) => {
        console.log('Fetch current location started');
        let path = '/api/locations/' + locationID;
        fetch(path).
            then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log('Fetch current location complete');
                dispatch( { type:GET_CURRENT_LOCATION, payload: data});
            })
            .catch(err => console.error(`fetch current location operation failed: ${err.message}`));
    }
};
