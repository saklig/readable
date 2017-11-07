import { ADD_POST, RECEIVE_POST, UPDATE_POST } from '../actions/posts';
import { RECEIVE_COMMENT, UPDATE_COMMENT } from '../actions/comments';
import { RESET_FORM, UPDATE_POST_FORM, UPDATE_COMMENT_FORM } from '../actions/form';

const initialPostState = {
    post: {
        title: '',
        body: '',
        author: '',
        category: 'react'
    },
    comment: {
        body: '',
        author: '',
        parentId: '',
    },
    postAdded: false,
    postUpdated: false,
    commentUpdated: false
};

function form (state = initialPostState, action){

    switch (action.type) {
    case UPDATE_POST_FORM:
        return {
            ...state,
            post: {
                ...state.post,
                ...action.currentValues,
                [action.name]: action.newValue
            }
        };
    case UPDATE_COMMENT_FORM:
        return {
            ...state,
            comment: {
                ...state.comment,
                ...action.currentValues,
                [action.name]: action.newValue
            }
        };
    case RESET_FORM:
        return initialPostState;
    case ADD_POST:
        return {
            ...state,
            postAdded: true
        };
    case UPDATE_POST:
        return {
            ...state,
            postUpdated: true
        };
    case UPDATE_COMMENT:
        return {
            ...state,
            commentUpdated: true
        };
    case RECEIVE_POST:
        return {
            ...state,
            post: action.selectedpost
        };
    case RECEIVE_COMMENT:
        return {
            ...state,
            comment: action.comment
        };
    default:
        return state;
    }
}

export default form;