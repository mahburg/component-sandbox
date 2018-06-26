import React, { Component } from 'react';
import './Ham.css'
let bar1 = {
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    marginTop: '40px'
}
let bar2 = {
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    marginTop: '10px'
}
let bar3 = {
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    marginTop: '10px'
}
let clicked1 = {
    position: 'absolute',
    top: '20px',
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    transform: 'rotate(45deg)'
}
let clicked2 = {
    position: 'absolute',
    top: '20px',
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    transform: 'rotate(-45deg)'
}
let clicked3 = {
    position: 'absolute',
    top: '20px',
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    transform: 'rotate(90deg)',
    opacity: '0'
}

class Ham extends Component{
    render(){

        return(
            <div className="ham-all" style={{position: 'relative'}} onClick={_=>this.props.clickCB && this.props.clickCB()}>
                <div className="top" style={this.props.clicked ? clicked1: bar1} ></div>
                <div className="mid" style={this.props.clicked ? clicked2: bar2}></div>
                <div className="bot" style={this.props.clicked ? clicked3: bar3}></div>
            </div>
        )
    }
}

export default Ham;