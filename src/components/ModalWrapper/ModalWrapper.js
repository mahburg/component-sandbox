import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Modal.css';


// TODO: 
// 1. Styling for BG
// 2. Self open/ close
// 3. Controlled open close


class ModalWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    render(){
        const { show, children, bgClose, showBg, style} = this.props;
        return(
            <div>
                {
                    show
                    ?
                    <div  className="lg-modal-all">
                        <div className="lg-modal-bg" 
                            onClick={()=> bgClose && this.props.close()} 
                            style={{
                                backgroundColor: showBg ? style && style.bg && style.bg.backgroundColor || 'rgba(0,0,0,0.3)':'rgba(0,0,0,0)'
                            }}>
                        </div>
                        <div className="lg-modal-content">
                            {children}
                        </div>
                    </div>
                    :
                    null
                }  
            </div>
        )
    }
}

ModalWrapper.propTypes = {
    show: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
    bgStyle: PropTypes.object
}

export default ModalWrapper;