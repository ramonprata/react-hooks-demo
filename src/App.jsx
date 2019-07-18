import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { AppBar } from './layout';
import { DemoPage } from './hooksDemo';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <AppBar />
        </header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={DemoPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
