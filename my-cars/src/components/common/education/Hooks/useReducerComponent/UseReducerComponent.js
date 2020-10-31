import React, {useState, useEffect, useReducer} from 'react'
import axios from 'axios';

const initialState = {
    count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.value};
    case 'decrement':
      return {count: state.count - action.value};
    default:
      throw new Error();
  }
}


const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});


    useEffect(() => {
      
      axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
      .then(res => {
        setLoading(false);
        setPost(res.data);
        setError('');
      })
      .catch(error => {
        setLoading(false);
        setPost({});
        setError('Something went wrong');

      })

    }, []);


    return (
         <>
            <div>
                Count: {state.count}
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>-</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>+</button>
            </div>

            <div>
                Count: {stateTwo.count}
                <button onClick={() => dispatchTwo({type: 'decrement', value: 10})}>-</button>
                <button onClick={() => dispatchTwo({type: 'increment', value: 10})}>+</button>
            </div>

            <div>
                {loading ? 'loading' : post.title}
                {error ? error : null}
            </div>
            
        </>
    )
}

export default UseReducerComponent


