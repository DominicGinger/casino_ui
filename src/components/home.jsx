import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Colours from '../colours.json';
import Button from './button.jsx';
import Header from './header.jsx';

export default props => {
  return (
    <div>
      <section>
        { JSON.stringify(props.state, null, 2) }
      </section>
      <section>
        <ul>
          <li><Link to="/roulette" >Roulette</Link></li>
        </ul>
      </section>
    </div>
  );
}

