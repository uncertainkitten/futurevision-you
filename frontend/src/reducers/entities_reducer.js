import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import GoalsReducer from './goals_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  goals: GoalsReducer
});

export default entitiesReducer;