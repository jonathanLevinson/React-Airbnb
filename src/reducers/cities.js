import { SAVE_CITIES_LIST } from '../actions/getLocationsDataActions';

export default function cities(state = [], action) {
    switch (action.type) {
        case SAVE_CITIES_LIST:
            return action.payload;
        default:
            return state;
    }
}