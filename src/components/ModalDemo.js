//dev-header: true
import React, { Component } from 'react';
import Modal from './ModalWrapper/ModalWrapper';

class ModalDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            showBG: true,
            bgClose: true,
            bgColor: ''
            
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({ showModal: !this.state.showModal });
    }
    toggleVal(e){
        this.setState({ [e.target.name]: !this.state[e.target.name] });
    }
    handleInput(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        let {showModal, showBG, bgClose, bgColor} = this.state;
        return(
            <div>
                <h1>ModalDemo Component</h1>
                <div className="option-sel">
                    <div>
                        <label htmlFor="">Show Modal Background</label>
                        <input type="checkbox" name="showBG" onChange={e=>this.toggleVal(e)} checked={showBG}/>
                    </div>
                    <div>
                        <label htmlFor="">Close Modal On Background Click</label>
                        <input type="checkbox" name="bgClose" onChange={e=>this.toggleVal(e)} checked={bgClose}/>
                    </div>
                    <div>
                        <label htmlFor="">Modal BG Color</label>
                        <input type="text" name="bgColor" onChange={e=>this.handleInput(e)} value={bgColor}/>
                    </div>
                
                </div>
                <button onClick={this.toggle} >Open Modal</button>
                <Modal
                    show={showModal}
                    close={this.toggle}
                    bgClose={bgClose}
                    showBg={showBG}
                    style={{bg: {backgroundColor: bgColor}}} 
                >
                    <div className="modal-content">
                        <h2>Modal</h2>
                        <input type="text"/>
                        <button>Submit</button>
                        <button onClick={this.toggle}>X</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalDemo;