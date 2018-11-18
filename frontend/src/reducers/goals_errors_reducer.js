import {RECEIVE_GOAL_ERRORS, RECEIVE_GOALS, RECEIVE_GOAL} from "../actions/goals_actions";

const goalErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GOAL_ERRORS:
      return action.errors;
    case RECEIVE_GOALS:
      return [];
    case RECEIVE_GOAL:
      return [];
    default:
      return state;
  }
};

export default goalErrorsReducer;