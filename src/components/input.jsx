import React from 'react';
import styled from 'styled-components';

import Colours from '../colours.json';

export default props => {
  const Input =  styled.input`
  border: 1px solid ${Colours["5"]};
  color: ${Colours["5"]};
  line-height: 3em;
  font-size: 1.05em;
`;
  return (
    <p>
      <Input {...props} />
    </p>
  );
}

