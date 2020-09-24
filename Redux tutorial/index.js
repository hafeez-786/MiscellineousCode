import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@material-ui/core'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Redux part start from below here...
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import nameReducer from './reducers/nameReducer'
import wishReducers from './reducers/wishReducer'

const masterReducer = combineReducers({
  name: nameReducer,
  wish: wishReducers
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  masterReducer, {name: 'Hafeez', wish: ['eat', 'sleep']}, 
  composeEnhancers(applyMiddleware(thunk))
  )

// We wrapped App component along with Provider..
ReactDOM.render(<React.StrictMode>
  <Provider store={store}> 
    <App />
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
