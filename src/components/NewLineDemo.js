//dev-header: true
import React, { Component } from 'react';

import NewLineFormat from './NewLineFormat';

class NewLineDemo extends Component{
    constructor(){
        super();
        this.state = {
          str: "These are the voyages\nof the starship Enterprise\n\nTo boldly go\n\n\n\n\n\n\nwhere no one has gone before."
        }
    }

    handleChange(val){
        this.setState({
            str: val
        })
    }
    render(){
        return(
            <div>
                <textarea className="textArea" onChange={e=>this.handleChange(e.target.value)} value={this.state.str}/>
                <div className="comp">
                    <h3>NewLineFormat Component</h3>
                    <h3>P tag only</h3>
                    <NewLineFormat text={this.state.str} />
                    <p>{this.state.str}</p>
                </div>
            </div>
        )
    }
}

export default NewLineDemo;