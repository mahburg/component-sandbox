//dev-header: true
import React, { Component } from 'react';
import Ham from '../Ham/Ham';


class HamDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div>
                <div>
                    <label htmlFor="">Checked</label>
                    <input type="checkbox" name="clicked" checked={this.state.clicked} onChange={e=>this.handleInput(e)}></input>
                </div>
                <br/>
                <br/>
                <br/>
                <Ham clicked={this.state.clicked} clickCB={this.handleInput} />
            </div>
        )
    }
}

export default HamDemo;