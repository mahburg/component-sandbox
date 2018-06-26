//dev-header: true
import React, { Component } from 'react';
import TabWrapper from './Tab/Tab';

const TabButton = (c)=>{
    return (
        <div style={{background: 'maroon', color:'white', padding: '8px'}}>
            {c}
        </div>
    )
}

class TabDemo extends Component{
    
    render(){
        return(
            <div>
                <TabWrapper renderTabButton = {TabButton} tabs={[<h2>Home</h2>, <h2>About</h2>, <h2>Contact</h2>, <h2>4</h2>,<h2>5</h2>,<h2>6</h2>]}>
                    <h1 className="tab-content">Home Content</h1>
                    <h1 className="tab-content">About Content</h1>
                    <h1 className="tab-content">Contact Content</h1>
                    <h1 className="tab-content">Tab 4 Content</h1>
                    <h1 className="tab-content">Tab 5 Content</h1>
                    <h1 className="tab-content">Tab 6 Content</h1>
                </TabWrapper>
            </div>
        )
    }
}

export default TabDemo;