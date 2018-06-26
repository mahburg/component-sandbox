import React, { Component } from 'react';

import './App.css';

import { HashRouter } from 'react-router-dom';

// import NewLineDemo from './components/NewLineDemo';
// import TableDemo from './components/TableDemo';
import DevHeader from './DevHeader/DevHeader';
import DevRouter from './DevRouter/DevRouter';

class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to Lloyd's React Component Sandbox</h2>
          </div>
          <DevHeader/>
          <div className="content">
            <DevRouter/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

