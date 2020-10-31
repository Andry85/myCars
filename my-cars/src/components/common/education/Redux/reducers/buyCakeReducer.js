import {BUY_CAKE} from '../cake/cakeActions';

const initialState = {
    numberOfcakes: 10,
}

  
export default function buyCakeReducer(state = initialState, action) {
    switch (action.type) {
      case BUY_CAKE:
        return {
            ...state,
            numberOfcakes: state.numberOfcakes - action.payload
        }
      default:
        return state
    }
  }