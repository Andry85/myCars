import axios from 'axios';

import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCES,
    FETCH_USERS_FAILURE
} from './userTypes'


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSucces = users => {
    return {
        type: FETCH_USERS_SUCCES,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
                const users = response.data;
                dispatch(fetchUsersSucces(users));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}