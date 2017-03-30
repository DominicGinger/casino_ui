import React from 'react';
import styled from 'styled-components';

import Button from '../components/button.jsx';

export default props => {
  const Style =  styled.h1`
font-size: 1em;
color: red;
`;
  return (
    <div>
      <Style>{props.count}</Style>
      <Button label="Increment" onClick={props.increment} />
    </div>
  );
}
