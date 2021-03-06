import React from 'react';
import {Link} from 'react-router-dom';


class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let greeting = "";
    let session = "";
    if (this.props.loggedIn){
      greeting = `Welcome to FutureVision.${this.props.currentUser.username}`
      session = <button className="logoutBtn" onClick={this.props.logout}>Logout</button>
    } else {
      greeting = `Welcome to FutureVision.You`
      session = <div className="authBtns">
        <Link to="/login">Login :)</Link>
        <Link to="/signup">Signup =D</Link>
      </div>
    }

    return(
      <div className="splashContainer">
        <h3 className="greeting">{greeting}</h3>
        {session}
      </div>
    );
  }
}

export default Splash