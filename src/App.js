import React from 'react';

import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Gallery} from './components/Gallery';
import PhotoInfo from './components/PhotoInfo';



const App = () => {
  return (
      <Router>
        <div className="App">
          <NavigationBar/>
          <Switch>
            <Route exact path="/" component={Gallery}/>
            <Route path="/photos/:id" component={PhotoInfo}/>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
