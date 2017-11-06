import { RECEIVE_POSTS, REQUEST_POSTS, REMOVE_POST, ADD_VOTE, REMOVE_VOTE } from '../actions/posts';

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
    },
    isFetching: false,
    featchedAt: null
};

function posts (state = initialPostState, action){
    const { post } = action;
        
    switch (action.type) {
    case REQUEST_POSTS:
        return {
            ...state,
            isFetching: true,
        };
    case RECEIVE_POSTS:
        return {
            ...state,
            list: {
                ...action.posts
            },
            isFetching: false,
        };
    case REMOVE_POST:
        return {
            ...state,
            list: {
                ...state.list,
                [post.id]: {
                    ...state.list[post.id],
                    deleted: true
                }
            }
        };
    case ADD_VOTE:
        return {
            ...state,
            list: {
                ...state.list,
                [post.id]: {
                    ...state.list[post.id],
                    voteScore: post.voteScore + 1
                }
            }
        };
    case REMOVE_VOTE:
        return {
            ...state,
            list: {
                ...state.list,
                [post.id]: {
                    ...state.list[post.id],
                    voteScore: post.voteScore - 1
                }
            }
        };
    default:
        return state;
    }
}

export default posts;