import React from 'react';

import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router  } from "react-router-dom";

const App = () => {
  return (
      <Router>
        <div className="App">
          <NavigationBar/>
        </div>
      </Router>
  );
};

export default App;
