import * as ReadableAPI from '../utils/ReadableAPI';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const PARENT_REMOVE_COMMENT = 'PARENT_REMOVE_COMMENT';
export const ADD_COMMENT_VOTE = 'ADD_COMMENT_VOTE';
export const REMOVE_COMMENT_VOTE = 'REMOVE_COMMENT_VOTE';
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REQUEST_COMMENT = 'REQUEST_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export function addComment ({ comment }) {
    ReadableAPI.addComment(comment);

    return {
        type: ADD_COMMENT,
        comment
    };
}

export function updateComment (comment) {
    ReadableAPI.updateComment(comment);

    return {
        type: UPDATE_COMMENT,
        comment
    };
}

export function removeComment ({ comment }) {
    ReadableAPI.removeComment(comment.id);

    return {
        type: REMOVE_COMMENT,
        comment
    };
}

export function parentRemoveComment ({comment}){
    return {
        type: PARENT_REMOVE_COMMENT,
        comment
    };
}

export function addCommentVote ({comment}){
    ReadableAPI.upVoteComment(comment.id);

    return {
        type: ADD_COMMENT_VOTE,
        comment
    };
}

export function removeCommentVote ({comment}){
    ReadableAPI.downVoteComment(comment.id);
    return {
        type: REMOVE_COMMENT_VOTE,
        comment
    };
}

function requestComments() {
    return {
        type: REQUEST_COMMENTS
    };
}

function receiveComments(postId, json) {
    return {
        type: RECEIVE_COMMENTS,
        comments: json.length ? Object.assign(
            ...json.map((post) => ({
                [post.id]: {...post}
            }))): null,
        receivedAt: Date.now(),
        postId: postId
    };
}

export function fetchComments(postId) {
    return dispatch => {
        dispatch(requestComments());
        ReadableAPI.fetchComments(postId)
            .then(response => response.json())
            .then(json => dispatch(receiveComments(postId, json)));
    };
}

function requestComment() {
    return {
        type: REQUEST_COMMENT
    };
}

function receiveComment(commentId, comment) {
    return {
        type: RECEIVE_COMMENT,
        comment,
        receivedAt: Date.now(),
        commentId: commentId
    };
}

export function fetchComment(commentId) {
    return dispatch => {
        dispatch(requestComment());
        ReadableAPI.fetchComment(commentId)
            .then(response => response.json())
            .then(json => dispatch(receiveComment(commentId, json)));
    };
}