import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to the Random Greeting App</h1>
    <Link to="greeting">
      <button type="button">Click here to get a random Greeting</button>
    </Link>
  </div>
);

export default Home;
