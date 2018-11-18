import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn;
  if (state.session.id) {
    loggedIn = true
  } else {
    loggedIn = false
  }
  return ({
    loggedIn: loggedIn,
    errors: state.errors.session,
    formType: 'login'
  });
}

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);