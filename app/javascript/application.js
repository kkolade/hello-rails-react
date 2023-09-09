// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Greeting from './components/Greeting';

// function App() {
//   return <Greeting />;
// }

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // </React.StrictMode>
);
