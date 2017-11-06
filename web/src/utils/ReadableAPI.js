const api = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'franksreadableproject',
    'Content-Type': 'application/json'
};

export const fetchPosts = () => fetch(`${api}/posts`, { headers });

export const addPost = (post) => {
    return fetch(`${api}/posts`, {
        headers,
        method: 'post',
        body: JSON.stringify(post)
    });
};

export const removePost = (id) => {
    fetch(`${api}/posts/${id}`, {
        headers,
        method: 'delete'
    });
};

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