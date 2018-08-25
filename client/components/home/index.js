import React from 'react';

import { Container, LeftPanelContainer, RightPanelContainer } from './elements';

import LeftPanel from '../left-panel';
import RightPanel from '../right-panel';

const App = () => (
  <Container>
    <LeftPanelContainer>
      <LeftPanel />
    </LeftPanelContainer>

    <RightPanelContainer>
      <RightPanel />
    </RightPanelContainer>
  </Container>
);

export default App;
