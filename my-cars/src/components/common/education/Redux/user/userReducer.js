
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCES,
    FETCH_USERS_FAILURE
} from './userTypes'


const iniialState =  {
    loading: true,
    error: '',
    users: []
};


const reducer = (state = iniialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCES: 
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE: 
            return {
                loading: false,
                users: [],
                error: action.payload
            }      
        default:
            return state  
    }
}

export default reducer;