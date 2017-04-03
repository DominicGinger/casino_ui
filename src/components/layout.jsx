import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

export default props => {
  return (
    <Tabs value={props.location.pathname}>
      <Tab value="/" label="Home" containerElement={<Link to="/" />} />
      <Tab value="/counter" label="Counter" containerElement={<Link to="/counter" />} />
  </Tabs>
  );
}
