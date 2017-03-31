import React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import Counter from './containers/counter.js';
import Welcome from './containers/welcome.js';
import Home from './containers/home.js';
import Colours from './colours.json';

const Root = styled.div`
margin: 0 auto;
margin-left: -8px;
padding: 4em 1em;
position: absolute;
top: 0px;
bottom: 0px;
width: 100%;
font-size: 1em;
color: ${Colours["5"]};
background-color: ${Colours["1"]};
font-family: "Helvetica", "Arial", sans-serif;
line-height: 1.5;
`;

export default () => <Root>
  <Route exact path="/" component={Welcome}/>
  <Route exact path="/home" component={Home}/>
  <Route path="/counter" component={Counter}/>
</Root>;
