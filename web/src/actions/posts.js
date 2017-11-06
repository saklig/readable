import * as ReadableAPI from '../utils/ReadableAPI';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
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

export function removePost ({ post }) {
    ReadableAPI.removePost(post.id);

    return {
        type: REMOVE_POST,
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



export function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts());
        ReadableAPI.fetchPosts()
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)));
    };
}