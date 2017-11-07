import { ADD_COMMENT, REMOVE_COMMENT, PARENT_REMOVE_COMMENT, ADD_COMMENT_VOTE, REMOVE_COMMENT_VOTE, RECEIVE_COMMENTS, UPDATE_COMMENT } from '../actions/comments';

const initialComments = {
    0: {
        id: 0,
        parentId: 1,
        timestamp: Date.now(),
        body: 'asdf',
        author: 'user1',
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    }
};

function comments(state = initialComments, action)
{
    const { comment } = action;

    switch (action.type) {
    case ADD_COMMENT:
        return {
            ...state,
            [comment.id]: comment
        };
    case REMOVE_COMMENT:
        return {
            ...state,
            [comment.id]: {
                ...state[comment.id],
                deleted: true
            }
        };
    case PARENT_REMOVE_COMMENT:
        return {
            ...state,
            [comment.id]: {
                ...state[comment.id],
                parentDeleted: true
            }
        };
    case ADD_COMMENT_VOTE:
        return {
            ...state,
            [comment.id]: {
                ...state[comment.id],
                voteScore: comment.voteScore + 1
            }
        };
    case REMOVE_COMMENT_VOTE:
        return {
            ...state,
            [comment.id]: {
                ...state[comment.id],
                voteScore: comment.voteScore - 1
            }
        };
    case RECEIVE_COMMENTS:
        return {
            ...state,
            ...action.comments
        };
    case UPDATE_COMMENT:
        return {
            ...state,            
            [comment.id] : {
                ...comment
            }
        };
    default:
        return state;
    }
}

export default comments;