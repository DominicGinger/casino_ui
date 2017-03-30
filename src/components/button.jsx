import React from 'react';
import styled from 'styled-components';

export default props => {
  const Button =  styled.button`
font-size: 1em;
color: red;
border: 1px;
`;
  return <Button onClick={props.onClick}>{props.label}</Button>;
}
