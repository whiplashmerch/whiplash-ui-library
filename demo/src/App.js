import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainIndex from './views/MainIndex';
import Home from './views/Home';
import ItemView from './views/ItemView';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ MainIndex }>
          <IndexRoute component={ Home } />
          <Route path="/library/:name" component={ ItemView } />
        </Route>
      </Router>
    );
  }
}
