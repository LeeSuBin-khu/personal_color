import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import test from './test';


class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/test" exact component={test} />       
        </BrowserRouter>
      </div>
    )
  }
}

export default App;