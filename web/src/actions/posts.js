import * as ReadableAPI from '../utils/ReadableAPI';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const ADD_VOTE = 'ADD_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';

function requestPosts() {
    return {
        type: REQUEST_POSTS
    };
}

function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        posts: Object.assign(
            ...json.map((post) => ({
                [post.id]: {...post}
            }))),
        receivedAt: Date.now()
    };
}

export function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts());
        ReadableAPI.fetchPosts()
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)));
    };
}

function requestPost(postId) {
    return {
        type: REQUEST_POST,
        postId: postId
    };
}

function receivePost(json) {
    return {
        type: RECEIVE_POST,
        selectedpost:{...json},
        receivedAt: Date.now()
    };
}

export function fetchPost(postId) {
    return dispatch => {
        dispatch(requestPost(postId));
        ReadableAPI.fetchPost(postId)
            .then(response => response.json())
            .then(json => dispatch(receivePost(json)));
    };
}

export function addPost({ post }) {
    ReadableAPI.addPost(post);
    
    return {
        type: ADD_POST,
        post
    };
}

export function removePost ({ post }) {
    ReadableAPI.removePost(post.id);

    return {
        type: REMOVE_POST,
        post
    };
}

export function updatePost (post) {
    ReadableAPI.updatePost(post);

    return {
        type: UPDATE_POST,
        post
    };
}

export function addVote ({ post }) {
    ReadableAPI.upVotePost(post.id);

    return {
        type: ADD_VOTE,
        post
    };
}

export function removeVote ({ post }) {
    ReadableAPI.downVotePost(post.id);
    return {
        type: REMOVE_VOTE,
        post
    };
}



