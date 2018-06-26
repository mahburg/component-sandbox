import React, { Component } from 'react';

class TabWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            selector: 0
        }
        this.incSel = this.incSel.bind(this);
    }

    incSel(i){
        this.setState({ selector: i });
    }

    render(){
        let {children} = this.props;
        let { selector } = this.state;
        let tabs = this.props.tabs.map((c,i)=>{
            return (
                <span key={i} onClick={()=>this.incSel(i)}>
                    {this.props.renderTabButton(c)}
                </span>
            )
        })
        return(
            <div>
                <div className="tab-buttons" style={{display: 'grid', gridTemplateColumns:`repeat(${this.props.tabs.length}, 1fr)`,gridGap:'2px',cursor:'pointer'}}>
                    {tabs}
                </div>
                <div className="tab-body">
                    {children[selector]}
                </div>
            </div>
        )
    }
}

export default TabWrapper;