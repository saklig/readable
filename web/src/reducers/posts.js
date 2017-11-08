import { ADD_POST, REMOVE_POST, ADD_VOTE, REMOVE_VOTE, REQUEST_POSTS, RECEIVE_POSTS, REQUEST_POST, RECEIVE_POST, UPDATE_POST } from '../actions/posts';

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
    postsLoaded: false
};

function posts (state = initialPostState, action){
    const { post } = action;

    switch (action.type) {
    case ADD_POST:
        return {
            ...state,
            list: {
                ...state.list,
                [post.id]: post
            }
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
    case REQUEST_POSTS:
        return {
            ...state
        };
    case RECEIVE_POSTS:
        return {
            ...state,
            list: {
                ...action.posts
            },
            postsLoaded: true
        };
    case REQUEST_POST:
        return {
            ...state
        };
    case RECEIVE_POST:
        return {
            ...state
            ,
            selectedpost: {
                ...action.selectedpost
            }
        };
    case UPDATE_POST:
        return {
            ...state,
            list: {
                ...state.list,
                [post.id]: {
                    ...post
                }
            }
        };
    default:
        return state;
    }
}

export default posts;