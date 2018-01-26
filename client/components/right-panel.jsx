import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { global, container, title } from '../styles/right-panel';

@Radium
class RightPanel extends Component {
  render () {
    return (
      <div className="right-panel" style={ container }>
        <Style rules={ global } />

        <div style={ title }>
          <div style={ title.container }>
            <div style={ title.container.prefix }>
              xhu
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightPanel;
