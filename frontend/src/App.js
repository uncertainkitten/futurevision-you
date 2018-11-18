import React, { Component } from 'react';
import './App.css';
import SplashContainer from './components/session/splash_container';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import GoalIndexContainer from './components/goals/goal_index_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from './util/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to FutureVision.You</h1>
        <Switch>
          <Route exact path="/" component={SplashContainer} />
          <ProtectedRoute path="/goals" component={GoalIndexContainer}/>
          <AuthRoute path="/signup" component={SignupFormContainer}/>
          <AuthRoute path="/login" component={LoginFormContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
