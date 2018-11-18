import React from 'react';
import {Link} from 'react-router-dom';


class Splash extends React.Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    localStorage.clear();
    this.props.logout();
  }

  componentDidMount(){
    localStorage.setItem("currentUser", JSON.stringify(this.props.currentUser))
  }

  render() {
    let greeting = "";
    let session = "";
    if (this.props.loggedIn){
      greeting = `Welcome to FutureVision.${this.props.currentUser.username}`
      session = <button className="logoutBtn" onClick={this.handleLogout}>Logout</button>
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
        <Link to="/goals">FutureVision.Goals</Link>
      </div>
    );
  }
}

export default Splash