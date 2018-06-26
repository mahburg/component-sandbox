import React, { Component } from 'react';

class RefExample extends Component{
    log(){
        console.log(this.refs)
        console.log(this.refs.myinput)
        console.log(this.refs.myinput.value)
        this.refs.myinput.value = 'NEW VALUE'
    }
    render(){
        return(
            <div>
                <input type="text" ref="myinput" className="myIn"/>
                <button onClick={_=>this.log()} >Log</button>
            </div>
        )
    }
}

export default RefExample;