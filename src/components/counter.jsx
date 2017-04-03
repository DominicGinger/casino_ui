import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default props => (
  <div>
    <p>{props.count}</p>
    <FloatingActionButton
      mini={true}
      onClick={props.increment}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton
      mini={true}
      secondary={true}
      onClick={props.decrement}
      disabled={props.count <= 0}
    >
      <ContentRemove />
    </FloatingActionButton>
  </div>
);

