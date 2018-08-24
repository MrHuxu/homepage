import React from 'react';

import { LeftPanelContainer, RightPanelContainer } from './elements';

import LeftPanel from '../left-panel';
import RightPanel from '../right-panel';

const App = () => (
  <div>
    <LeftPanelContainer>
      <LeftPanel />
    </LeftPanelContainer>

    <RightPanelContainer>
      <RightPanel />
    </RightPanelContainer>
  </div>
);

export default App;
