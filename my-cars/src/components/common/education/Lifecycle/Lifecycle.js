import React, { Component } from 'react';
import styles from './Lifecycle.module.scss';

export default class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: this.props.count,
        }

        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');

    }

    addCount = () => {
        this.setState((state,props) => ({
            count: state.count * props.count
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        
        console.log('componentDidUpdate');
        console.log('prevProps:', prevProps);
        console.log('prevState:', prevState);

    }

    shouldComponentUpdate() {

        console.log('shouldComponentUpdate');

        return true;
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');

        return null;
    }
    

    render() {
        console.log('render');
        return (
            <div className={styles.lifecycleWrap} onClick={this.addCount}>
                {this.state.count}
            </div>
        )
    }
}
