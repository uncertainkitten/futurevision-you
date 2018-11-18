import axios from 'axios';

export const getGoals = () => {
  return axios({
    method: "GET",
    url: '/api/goals'
  })
};

export const getGoal = (goalId) => {
  return axios({
    method: "GET",
    url: `/api/goals/${goalId}`
  })
}

export const postGoal = (goal) => {
  return axios({
    method: "POST",
    url: '/api/goals',
    data: {goal}
  })
};

export const deleteGoal = (goalId) => {
  return axios({
    method: "DELETE",
    url: `/api/goals/${goalId}`
  })
};

export const patchGoal = (goal) => {
  return axios({
    method: "PATCH",
    url: `/api/goals/${goal.id}`,
    data: {goal}
  })
}