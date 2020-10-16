import React, {Component} from 'react';

import widthCounter from './WidthCounter';

class ClickCounter  extends Component {


    render() {
        const {count, incrementCount} = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>
    }
}

export default widthCounter(ClickCounter, 5);