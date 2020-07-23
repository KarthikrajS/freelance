import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import decode from 'jwt-decode'
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import rootReducer from './rootReducer';
import 'semantic-ui-css/semantic.min.css';
import {userLoggedIn} from "./actions/auth";
import './index.css'
// import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.freelanceToken){
    const payload = decode(localStorage.freelanceToken);
    console.log(payload)
    const user = {token: localStorage.freelanceToken, email:payload.email, confirmed:payload.confirmed};
    store.dispatch(userLoggedIn(user));
}


ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <Route component={ App } />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
