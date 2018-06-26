import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// ↓ Component Imports Start ↓
import DragDropDemo from "../components/DragDropDemo";
import ModalDemo from "../components/ModalDemo";
import NewLineDemo from "../components/NewLineDemo";
import TabDemo from "../components/TabDemo";
import TableDemo from "../components/TableDemo";
import HamDemo from "../components/HamDemo/HamDemo";
import SvgDemo from "../components/SVG/SvgDemo";
// ↑ Component Imports End ↑


class DevRouter extends Component{
    render(){
        return(
            <div>
                <Switch>
					<Route path="/dev/dragdropdemo" component={DragDropDemo} />
					<Route path="/dev/modaldemo" component={ModalDemo} />
					<Route path="/dev/newlinedemo" component={NewLineDemo} />
					<Route path="/dev/tabdemo" component={TabDemo} />
					<Route path="/dev/tabledemo" component={TableDemo} />
					<Route path="/dev/hamdemo" component={HamDemo} />
					<Route path="/dev/svgdemo" component={SvgDemo} />
                </Switch>
            </div>
        )
    }
}

export default DevRouter;