import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { global, leftPanel, rightPanel } from '../styles/app';

@Radium
class App extends Component {
  render () {
    return (
      <div>
        <Style rules={ global } />

        <div style={ leftPanel }>
          left
        </div>

        <div style={ rightPanel }>
          right
        </div>
      </div>
    );
  }
}

export default App;
