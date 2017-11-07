import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import sortBy from './others';
import form from './form';
import comments from './comments';

export default combineReducers({
    categories,
    posts,
    sortBy,
    form,
    comments
});

combineReducers({
    categories,
    posts,
    sortBy,
    form,
    comments
});