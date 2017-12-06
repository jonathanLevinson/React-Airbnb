import { SAVE_LOCATIONS } from '../actions/getLocationsDataActions';

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_LOCATIONS:
            return action.payload;
        default:
            return state;
    }
}