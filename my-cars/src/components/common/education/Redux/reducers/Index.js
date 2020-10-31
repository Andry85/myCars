import { combineReducers } from 'redux'

import buyCakeReducer from './buyCakeReducer';
import userReducer from '../user/userReducer';
import postReducer from '../posts/postsReducer';

const AllReducers = combineReducers({
  buyCakeReducer: buyCakeReducer,
  user: userReducer,
  posts: postReducer
})

export default AllReducers