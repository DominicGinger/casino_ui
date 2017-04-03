import React from 'react';

export default props => {
  return (
    <div>
      <section>
        { JSON.stringify(props.state, null, 2) }
      </section>
      <section>
        Welcome Home!
      </section>
    </div>
  );
}

