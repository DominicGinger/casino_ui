import React from 'react';
import TextField from 'material-ui/TextField';

export default props => {
  return (
    <div>
      <section>
        <TextField
          id="currentState"
          value={ JSON.stringify(props.state, null, 2) }
          multiLine={true}
          fullWidth={true}
          rows={50}
        />
      </section>
      <section>
        Welcome Home!
      </section>
    </div>
  );
}

