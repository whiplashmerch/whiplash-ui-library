import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as reducers from 'demo/reducers';


// init state
const initialState = {
  library: {
    isFetching: false,
    items: [],
    lastUpdated: null
  }
};

// Add reducers to store
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);


export default store;
