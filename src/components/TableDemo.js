//dev-header: true
import React, { Component } from 'react';

import Table from './Table/Table'

class TableDemo extends Component{
    constructor(){
        super();
        this.state = {
            headers: [
                {name:'ID', prop: 'id'},
                {name:'Title', prop: 'title'},
                {name:'First Name', prop: 'first_name'},
                {name:'Last Name', prop: 'last_name'},
            ],
            colW:['150px','250px','1fr','1fr'],
            data: [
                {'id':3, title:'Title 3', first_name: 'Bryan', last_name:'Fernados'},
                {'id':2, title:'The Example title 2', first_name: 'Bryan'},
                {'id':4, title:'An Example title 4', first_name: 'Dave'},
                {'id':1, title:'Example title 1', first_name: 'Lloyd', last_name:'Grubham'},
                {'id':7, title:'Example title 1', first_name: 'lloyd', last_name:'grubham'},
                {'id':6, title:'Example title 6', first_name: 'Ed'},
                {'id':5, title:'Example title 5', first_name: 'Ed', last_name:'Zed'},
            ]
        }
    }

    rowCallback(e, datum){
        // console.log(e)
        console.log(datum)
    }
    cellCallback(e, datum, col){
        console.log(datum[col.prop])
        console.log('https://google.com/search?q='+ datum[col.prop])
        // window.location = 'https://google.com/search?q='+ datum[col.prop]
    }

    render(){
        let {data, headers, colW} = this.state;
        return(
            <div>
                <h1>Table Demo</h1>
                <Table data={data} columns={headers} widths={colW} rowCB={null} cellCB={this.cellCallback}/>
            </div>
        )
    }
}

export default TableDemo;