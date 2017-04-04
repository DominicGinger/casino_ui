import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const buildTab = name => (
  <Tab
    value={`/${name}`}
    label={capitalize(name)}
    containerElement={<Link to={`/${name}`} />}
  />
);

export default props => {
  return (
    <Tabs value={props.location.pathname}>
      <Tab value="/" label="Home" containerElement={<Link to="/" />} />
      {buildTab("counter")}
      {buildTab("roulette")}
  </Tabs>
  );
}
