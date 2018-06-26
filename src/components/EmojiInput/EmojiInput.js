//dev header: true
import React, { Component } from 'react';

import './EmojiInput.css';

class EmojiInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: 'dasf'
        }
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return(
            <div className="x">
                <div dangerouslySetInnerHTML={{ __html: this.state.input }} />
                <label className="inputer-label" htmlFor="inputer">
                <p>{this.state.input}</p>
                    <input onChange={e=>this.handleInput(e)} value={this.state.input} type="text" name="input" id="inputer"/>
                </label>
            </div>
        )
    }
}

export default EmojiInput;