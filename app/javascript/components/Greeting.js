import React from 'react';
import { Link } from 'react-router-dom';

function Greeting() {
  return (
    <section>
      <h3>Here is your greeting:</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

export default Greeting;
