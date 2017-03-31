import React from 'react';
import styled from 'styled-components';

import Colours from '../colours.json';

export default props => {
  const Header = styled(`h${props.presence}`)`
  color: ${Colours["5"]};
  text-align: center;
  font-size: 2em;
  margin-top: 1em;
  padding-top: 1em;
  `;

  return <Header>{props.children}</Header>;
}
