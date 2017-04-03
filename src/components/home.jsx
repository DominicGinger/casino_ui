import React from 'react';
import { Link } from 'react-router-dom';

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

