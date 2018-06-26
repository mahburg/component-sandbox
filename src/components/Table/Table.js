import React, { Component } from 'react';
import './Table.css'

class Table extends Component{
    constructor(){
        super();
        this.state = {
            sortCol: 0,
            desc: false,
        }
    }
    
    setSortCol(ind){
        if(this.state.sortCol === ind){
            this.setState({ desc: !this.state.desc });
        } else {
            this.setState({ sortCol: ind, desc: false });
        }
    }
    render(){
        let { sortCol, desc } = this.state;
        let { columns, data, widths, rowCB, cellCB } = this.props;
        columns = columns || Object.keys(data[0]);
        data = data.slice().sort((a,b)=>{
            let col = columns[sortCol].prop || columns[sortCol];
            let _a =  a[col] || ''
            let _b =  b[col] || ''
            if (typeof _a === 'number'){
                return desc ?( _b - _a ): (_a - _b);
            } else{
                return desc ?( _b.toLowerCase() > _a.toLowerCase() ? 1 : -1 ): (_a.toLowerCase() > _b.toLowerCase() ? 1 : -1 );
            }
        })
        let colWidths = widths ? typeof widths === 'string' ? widths : widths.join(' ') : '1fr'.repeat(columns.length);
        // const cols = columns.map((col,i)=><p onClick={_=>this.setSortCol(i)} key={i} className="column-header">{col.name || col} {i===sortCol ? desc ?'˄':"˅" :null}</p>)
        const cols = columns.map((col,i)=><p onClick={_=>this.setSortCol(i)} key={i} className="column-header" >{col.name || col} {i===sortCol ? desc ?'↑':'↓' :null}</p>)
        const rows = data.map((datum,i)=><div className="table-row" onClick={e=>typeof rowCB ==='function' ? rowCB(e,datum):null} style={{backgroundColor: i%2?"#CCC":"white", gridTemplateColumns:`${widths.join(' ')}`}} key={i}>
            {columns.map((col,i)=><p key={i} onClick={e=>typeof cellCB ==='function' ? cellCB(e,datum,col):null}  >{datum[col.prop || col]}</p>)}
        </div>)

        let tableDefaultStyle = {
            background: 'blue',

        }

        let tableStyle = Object.assign({}, tableDefaultStyle, this.props.tableStyle || {})

        return(
            <div className="table" style = {tableStyle} >
                <div className="table-row table-header" style={{gridTemplateColumns:`${colWidths}`}}>{cols}</div>
                {rows}
            </div>
        )
    }
}

export default Table;