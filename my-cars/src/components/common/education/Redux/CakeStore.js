import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyCake} from './cake/cakeActions';

const CakeStore = (props) => {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes: {props.numberOfcakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} of cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfcakes: state.buyCakeReducer.numberOfcakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeStore)
