const initialCategories = {
    react: {
        name: 'react',
        url: 'react'
    },
    redux: {
        name: 'redux',
        url: 'redux'
    },
    udacity: {
        name: 'udacity',
        url: 'udacity'
    }
};

function categories(state = initialCategories, action)
{
    return state;
}

export default categories;