import React, { Component } from 'react';

class NewLineFormat extends Component{
    render(){
        const output = this.props.text ? newLineFormating(this.props.text, this.props.type): null
        return(
            <span>
                {output}
            </span>
        )
    }
}
function tagSelector(contents, i, type){
    if (contents === ''){
        return <br key={i}/>
    }
    switch (type) {
        case 'p':
            return <p key={i}>{contents}</p>
        case 'div':
            return <div key={i}>{contents}</div>
        case 'li':
            return <li key={i}>{contents}</li>
        default:
            return <p key={i}>{contents}</p>
    }
}
function newLineFormating(str, type = 'p') {
    return str.split(/\n/g).map((c,i)=> tagSelector(c, i, type));
}

export default NewLineFormat;