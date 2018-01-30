import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import LeftPanel from './left-panel';
import RightPanel from './right-panel';

import { global, body, leftPanel, rightPanel } from '../styles/app';

@Radium
class App extends Component {
  render () {
    return (
      <div style={ body }>
        <Style rules={ global } />

        <div style={ leftPanel }>
          <LeftPanel />
        </div>

        <div style={ rightPanel }>
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
