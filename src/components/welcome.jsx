import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import Colours from '../colours.json';
import Button from './button.jsx';
import Input from './input.jsx';
import Container from './container.jsx';
import Header from './header.jsx';

export default props => {
  const FormButton = styled(Button)`
    width: 70%;
    text-align: center;
  `;

  const FormInput = styled(Input)`
    width: 70%;
    margin-bottom: 20px;
    padding-left: 10px;
  `;

  const ErrorMessage = styled.div`
    text-align: center;
    color: ${Colours["4"]};
  `;

  if (props.validated && props.valid) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div>
        <Header presence="2">Welcome</Header>
        <Container>
          { props.validated && !props.valid && <ErrorMessage>{props.message}</ErrorMessage> }
          <FormInput type="text" placeholder="Your Name" value={props.name} onChange={props.updateName}/>
          <FormInput type="number" value={props.cash} onChange={props.updateInitialCash}/>
          <FormButton label="Begin" onClick={props.createNewUser}/>
        </Container>
      </div>
    );
  }
}
