import * as GoalsAPI from '../util/goals_api_util';

export const RECEIVE_GOALS = "RECEIVE_GOALS";
export const RECEIVE_GOAL = "RECEIVE_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const RECEIVE_GOAL_ERRORS = "RECEIVE_GOAL_ERRORS"

export const receiveGoals = (goals) => ({
  type: "RECEIVE_GOALS",
  goals
});

export const receiveGoal = (goal) => ({
  type: "RECEIVE_GOAL",
  goal
});

export const removeGoal = (goalId) => ({
  type: "REMOVE_GOAL",
  goalId
});

export const receiveGoalErrors = (errors) => ({
  type: "RECEIVE_GOAL_ERRORS",
  errors
})

export const fetchGoals = () => dispatch => {
  return GoalsAPI.getGoals()
    .then(goals => dispatch(receiveGoals(goals.data)))
    .catch(err => dispatch(receiveGoalErrors(err.response.data)));
};

export const fetchGoal = (goalId) => dispatch => {
  return GoalsAPI.getGoal(goalId)
    .then(goal => dispatch(receiveGoal(goal.data)))
    .catch(err => dispatch(receiveGoalErrors(err.response.data)));
};

export const clearGoal = (goalId) => dispatch => {
  return GoalsAPI.deleteGoal(goalId)
    .then(() => dispatch(removeGoal(goalId)))
    .catch(err => dispatch(receiveGoalErrors(err.response.data)));
};

export const changeGoal = (goal) => dispatch => {
  return GoalsAPI.patchGoal(goal)
  .then(goal => dispatch(receiveGoal(goal.data)))
  .catch(err => dispatch(receiveGoalErrors(err.response.data)));
};

export const createGoal = (goal) => dispatch => {
  return GoalsAPI.postGoal(goal)
  .then(goal => dispatch(receiveGoal(goal.data)))
  .catch(err => dispatch(receiveGoalErrors(err.response.data)));
};