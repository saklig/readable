export const RESET_FORM = 'RESET_FORM';
export const UPDATE_POST_FORM = 'UPDATE_POST_FORM';
export const UPDATE_COMMENT_FORM = 'UPDATE_COMMENT_FORM';

export const resetForm = () => ({
    type: RESET_FORM
});

export const updatePostForm = (name, newValue, currentValues) => ({
    type: UPDATE_POST_FORM,
    name, newValue, currentValues
});

export const updateCommentForm = (name, newValue, currentValues) => ({
    type: UPDATE_COMMENT_FORM,
    name, newValue, currentValues
});