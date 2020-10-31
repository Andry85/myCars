
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCES,
    FETCH_POSTS_FAILURE,
    ADDING_POSTS_REQUEST
} from './postsTypes'


const iniialState =  {
    loading: true,
    error: '',
    posts: [],
    post: {}
};


const reducer = (state = iniialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCES: 
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        case FETCH_POSTS_FAILURE: 
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        case ADDING_POSTS_REQUEST: 
            return {
                posts: [...state.posts, action.element]
            }          
        default:
            return state  
    }
}

export default reducer;