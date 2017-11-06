const api = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'franksreadableproject',
    'Content-Type': 'application/json'
};

export const fetchPosts = () => fetch(`${api}/posts`, { headers });
