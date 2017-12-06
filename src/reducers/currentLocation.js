import { GET_CURRENT_LOCATION } from '../actions/getLocationsDataActions';

export default function currentLocation(state = {}, action) {
    switch (action.type) {
        case GET_CURRENT_LOCATION:
            return action.payload;
        default:
            return state;
    }
}