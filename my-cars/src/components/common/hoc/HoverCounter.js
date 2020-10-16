import React, {Component} from 'react';
import widthCounter from './WidthCounter';

class HoverCounter  extends Component {

    render() {
        const {count, incrementCount} = this.props;
        return <p onMouseOver={incrementCount}>Hovered {count} times</p>
    }
}

export default widthCounter(HoverCounter, 10);