import { CHANGE_SORTING } from '../actions/others';

const initialPostState = 'voteScore';

function sortBy (state = initialPostState, action){
    const { sortBy } = action;

    switch (action.type) {
    case CHANGE_SORTING:
        return sortBy;
    default:
        return state;
    }
}

export default sortBy;