import React from 'react';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from 'demo/store';
import VisibleMainIndex from '../routes/VisibleMainIndex';
import Home from '../routes/Home';
import ItemView from '../routes/ItemView';
import './App.css';


// create an enhanced history state
const history = syncHistoryWithStore(hashHistory, store);


export default function App() {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ VisibleMainIndex }>
          <IndexRoute component={ Home } />
          <Route path="/library/:name" component={ ItemView } />
        </Route>
      </Router>
    </Provider>
  );
}
