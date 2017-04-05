import React from 'react';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Star from 'material-ui/svg-icons/toggle/star-border';

import { edges } from '../constants/roulette.json';

const defaultChip = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '2.4em',
  height: '2.2em',
  margin: '-1.2em',
  textAlign: 'center'
};

const styles = {
  container: {
    position: 'relative',
    height: '24em',
    margin: '5em auto 0'
  },
  button: {
    position: 'relative',
    top: '50%',
    marginTop: '-56px',
    left: '50%',
    marginLeft: '-24px'
  },
  ball: speed => Object.assign({}, defaultChip, {
    transform: `rotate(90deg) translate(12em) rotate(-90deg)`,
    animation: `example ${speed}s infinite linear`
  }),
  chip: index => {
    return Object.assign({}, defaultChip, {
      transform: `rotate(${(index*360)/(edges.length)-90}deg) translate(15em) rotate(-90deg)`
    });
  }
};

const getColours = colour => {
  switch(colour) {
    case 'green':
      return { back: '#91B806', fore: '#ffffff' };
    case 'red':
      return { back: '#B70000', fore: '#ffffff' };
    case 'black':
      return { back: '#2c2c2c', fore: '#ffffff' };
  }
};

const buildChip = (edge, i) => {
  const colours = getColours(edge.colour);
  return (<Chip
    key={`edge${i}`}
    style={styles.chip(i)}
    labelColor={colours.fore}
    backgroundColor={colours.back}>
    {edge.number}
  </Chip>);
};

const getSpeed = currentSpeed => currentSpeed == 4 ? 0.5 : 4;

const wrapper = fn => () => {
  fn(0.5)();
  setTimeout(fn(4), 1500);
}

export default props => (
  <div style={styles.container}>
    {edges.map((x, i) => buildChip(x, i))}

    <Chip style={styles.ball(props.roulette.speed)} >&nbsp;</Chip>
    <FloatingActionButton
      disabled={props.roulette.disabled}
      style={styles.button}
      onClick={wrapper(props.spin)}>
      <Star />
    </FloatingActionButton>
  </div>
);
