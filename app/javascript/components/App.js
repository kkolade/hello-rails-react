import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
