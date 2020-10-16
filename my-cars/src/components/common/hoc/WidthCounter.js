import React, {Component} from 'react';

const widthCounter = (WrappedComponent, incrementNumber) => {
    class WidthCounter  extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
               count: 0 
            }
        }

    
        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            });
        }

        render() {
            console.log(this.props.name);
            return <WrappedComponent 
                        count={this.state.count} 
                        incrementCount = {this.incrementCount}
                        {...this.props}
                    />
        }
    }

    return WidthCounter;
}

export default widthCounter;