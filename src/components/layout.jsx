import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

export default props => {
  return (
    <Tabs value={props.location.pathname}>
      <Tab value="/" label="Home" containerElement={<Link to="/" />} />
      <Tab value="/1" label="Counter" containerElement={<Link to="/1" />} />
  </Tabs>
  );
}
