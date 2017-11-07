const api = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'franksreadableproject',
    'Content-Type': 'application/json'
};

export const fetchPosts = () =>
    fetch(`${api}/posts`, {
        headers
    });

export const fetchPost = (id) =>
    fetch(`${api}/posts/${id}`, {
        headers
    });

export const addPost = (post) =>
    fetch(`${api}/posts`, {
        headers,
        method: 'post',
        body: JSON.stringify(post)
    });

export const removePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        headers,
        method: 'delete'
    });

export const updatePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        headers,
        method: 'put',
        body: JSON.stringify(post)
    });

export const upVotePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        headers,
        method: 'post',
        body: JSON.stringify({option: 'upVote'})
    });

export const downVotePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        headers,
        method: 'post',
        body: JSON.stringify({option: 'downVote'})
    });

export const fetchComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, {
        headers
    });

export const fetchComment = (commentId) =>
    fetch(`${api}/comments/${commentId}`, {
        headers
    });

export const addComment = (comment) =>
    fetch(`${api}/comments`, {
        headers,
        method: 'post',
        body: JSON.stringify(comment)
    });

export const removeComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        headers,
        method: 'delete'
    });

export const updateComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        headers,
        method: 'put',
        body: JSON.stringify(comment)
    });


export const upVoteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        headers,
        method: 'post',
        body: JSON.stringify({option: 'upVote'})
    });

export const downVoteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        headers,
        method: 'post',
        body: JSON.stringify({option: 'downVote'})
    });