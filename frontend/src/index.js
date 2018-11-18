import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import {configureStore} from './store/store';
import {getUser} from './util/user_api_util';
import {signup, login, logout} from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;

  if (localStorage.getItem("currentUser") && localStorage.getItem("currentUser") !== "undefined") {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const preloadedState = {
      entities: {
        users: { [currentUser.id]: currentUser }
        },
        session: { id: currentUser.id }
      };
      store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }



  //Tests
  window.getUser = getUser;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end tests
  ReactDOM.render(<Root store={store} />, root);
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
