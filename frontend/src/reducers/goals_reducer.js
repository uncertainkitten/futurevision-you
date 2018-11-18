import {RECEIVE_GOALS, RECEIVE_GOAL, REMOVE_GOAL} from '../actions/goals_actions';
import {merge} from 'lodash';

const goalsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_GOALS:
      return merge({}, state, action.goals);
    case RECEIVE_GOAL:
      return merge({}, state, {[action.goal.id]: action.goal});
    case REMOVE_GOAL:
      let newGoals = {...state};
      delete newGoals[action.goalId];
      return newGoals;
    default:
      return state;
  }
};

export default goalsReducer;