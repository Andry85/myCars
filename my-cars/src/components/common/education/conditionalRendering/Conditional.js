import React, { Component } from 'react'

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Предупреждение!
      </div>
    );
}

export default class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             open: false,
             iscomplited: false,
             showWarning: false
        }
    }
    


    render() {

            let messenger;
            if (this.state.open) {
                messenger = <div>Opened</div>
               
            } else {
                messenger = <div>Closed</div>
                // throw new Error(`It shouldn'n be opened`)
            }

        return (
            <div>
                {messenger}
                {this.state.iscomplited ? <div>Task is finished</div> : <div>Task is not finished</div>}
                <WarningBanner warn={this.state.showWarning} />
            </div>
        )
    }
}
