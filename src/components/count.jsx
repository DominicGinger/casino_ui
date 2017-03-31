import React from 'react';
import styled from 'styled-components';

import Button from '../components/button.jsx';

export default props => (
    <div>
      <p>{props.count}</p>
      <Button type="" label="Increment" onClick={props.increment} />
    </div>
  );
