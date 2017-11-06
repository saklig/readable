import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import sortBy from './others';

export default combineReducers({
    categories,
    posts,
    sortBy
});

combineReducers({
    categories,
    posts,
    sortBy
});