import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './DevHeader.css';

import data from '../dh.json';

class DevHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            links: []
        }
    }
    componentWillMount(){
        // console.log(data)
        this.setState({ links: data });
    }
    render(){
        let { links } = this.state;
        // console.log(links[0])
        const dispLinks = links.map((link, i)=>{
            return (
                <Link className='dev-link' key={i} to={link.link} >{link.title}</Link>
            )
        })
        return(
            <div className='dev-header' style={{gridTemplateColumns:`repeat(${links.length}, 1fr)`}} >
                {dispLinks}
            </div>
        )
    }
}

export default DevHeader;