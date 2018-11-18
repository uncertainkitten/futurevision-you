import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render () {
    let signText = "";
    if (this.props.formType === 'login'){
      signText = "Login"
    } else {
      signText = "Signup"
    }

    let errors = "";
    if (this.props.errors.length){
      errors = this.props.errors.map(error => <li className="error">{error}</li>)
    }

    if (this.props.loggedIn) {
      return (<Redirect to='/' />);
    }  else {
      return (
      <div className="loginForm">
        <h2>{signText}</h2>
          <div className="session">
            <ul className="sessionErrorList">{errors}</ul>

            <form className="authForm" onSubmit={this.handleSubmit}>
              <label className="usernameLabel">
                Username
                <input className="authText" type="text" value={this.state.username} onChange={this.update("username")} />
              </label>

              <label className="passwordLabel">
                Password
                <input className="authText" type="password" value={this.state.password} onChange={this.update("password")} />
              </label>
              <input className="authButton" type="submit" value={signText} />
            </form>
          </div>
        </div>
        );
      }
  }
}

export default withRouter(SessionForm);