//dev-header: true
import React, { Component } from 'react';

import DragDropWrapper from './DragDrop/DragDrop';

class DragDropDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: 'Make a list,Then reorder by dragging it around'
        }
    }
    handleInput(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        let arr = this.state.list.split(',').filter(c=>c)
        let listItems = arr.map((c,i)=>{
            return(
                <li key={i}>{c}</li>
            )
        })
        // console.log(listItems)
        return(
            <div>
                <div className="input-area">
                    <div><label htmlFor="">Comma Separated List</label></div>
                    <textarea name="list" id="" cols="30" rows="10" onChange={e=>this.handleInput(e)} value={this.state.list}></textarea>
                </div>
                <DragDropWrapper>
                    {listItems}
                </DragDropWrapper>
            </div>
        )
    }
}

export default DragDropDemo;