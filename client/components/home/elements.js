import styled from 'styled-components';

const baseContainer = styled.div`
  display       : inline-block;
  vertical-align : top;
  height        : 100%;
`;

export const LeftPanelContainer = styled(baseContainer)`
  width            : 36%;
  background-color : #393E46;

  @media (min-height: 52em) {
    overflow : hidden;
  }

  @media (max-height: 52em) {
    overflow : auto
  }

  @media (max-width: 680px) {
    width  : 100%;
    height : 52em;
  }
`;

export const RightPanelContainer = styled(baseContainer)`
  width : 64%;

  @media (max-width: 680px) {
    width : 100%;
  }

  @media (min-width: 680px) {
    overflow : auto;
  }
`;
