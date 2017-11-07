import { ADD_POST, RECEIVE_POST } from '../actions/posts';
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
    commentAdded: false
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
    case RECEIVE_POST:
        return {
            ...state,
            post: action.selectedpost
        };
    default:
        return state;
    }
}

export default form;