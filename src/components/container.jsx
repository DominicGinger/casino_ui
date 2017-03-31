import React from 'react';
import styled from 'styled-components';

import Colours from '../colours.json';

export default props => {
  const Container = styled.div`
    border: solid 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 65px;
    padding: 20px;
    padding-bottom: 40px;
    background-color: ${Colours["2"]};
    max-width: 400px;
    text-align: center;
  `;

  return <Container>{props.children}</Container>;
}
