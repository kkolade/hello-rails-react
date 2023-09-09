import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="greeting" element={<Greeting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
