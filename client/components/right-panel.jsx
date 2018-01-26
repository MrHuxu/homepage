import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { global, container } from '../styles/right-panel';

@Radium
class RightPanel extends Component {
  render () {
    return (
      <div className="right-panel" style={ container }>
        <Style rules={ global } />
        Right panel
      </div>
    );
  }
}

export default RightPanel;
