import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from './cake/cakeActions';

const CakeStoreHooks = () => {

    const numberOfcakes = useSelector(state => state.buyCakeReducer.numberOfcakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of cakes: {numberOfcakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
        </div>
    )
}


export default CakeStoreHooks
