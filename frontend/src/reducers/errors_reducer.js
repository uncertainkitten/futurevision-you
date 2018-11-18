import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import GoalErrorsReducer from './goals_errors_reducer';

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  goals: GoalErrorsReducer
});

export default errorsReducer;