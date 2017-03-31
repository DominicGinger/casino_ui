import React from 'react';
import styled from 'styled-components';

import Colours from '../colours.json';

const buttonColours = type => {
  switch(type) {
    case 'primary':
      return `background-color: ${Colours["4"]};\ncolor: ${Colours["5"]}`;
    case 'disabled':
      return `background-color: ${Colours["2"]};\ncolor: ${Colours["5"]}`;
    default:
      return `background-color: ${Colours["3"]};\ncolor: ${Colours["5"]}`;
  }
};
export default props => {
  const Button =  styled.button`
${buttonColours(props.type)}
border-radius: 2px;
border: solid 1px ${Colours["5"]};
padding: 10px;
font-size: 1.05em;
`;
  return <Button className={props.className} onClick={props.onClick}>{props.label}</Button>;
}
