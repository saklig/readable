const initialPostState = {
    list: {
        1: {
            id: 1,
            timestamp: Date.now(),
            title: 'title',
            body: 'body',
            author: 'author',
            category: 'react',
            voteScore: 1,
            deleted: false
        }
    }
};

function posts (state = initialPostState, action){
    switch (action.type) {

    default:
        return state;
    }
}

export default posts;