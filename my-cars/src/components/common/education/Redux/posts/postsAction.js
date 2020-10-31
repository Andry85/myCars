import axios from 'axios';

import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCES,
    FETCH_POSTS_FAILURE,
    ADDING_POSTS_REQUEST
} from './postsTypes'


export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSucces = posts => {
    return {
        type: FETCH_POSTS_SUCCES,
        payload: posts
    }
}

export const fetchPostsFailure = error => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
                const posts = response.data;
                dispatch(fetchPostsSucces(posts));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPostsFailure(errorMsg));
        })
    }
}


export const addingPosts = post => {
    return {
        type: ADDING_POSTS_REQUEST,
        element: post
    }
}

export const addPost = (name) => {
    console.log(name);
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: name.title,
            body: name.body,
            userId: name.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            dispatch(addingPosts(json));
  }) 
    }    
}


