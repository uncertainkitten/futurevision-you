import axios from 'axios';

export const postUser = (user) => {
  return axios({
    method: "POST",
    url: 'api/users',
    data: {user}
  })
};

export const postSession = (user) => {
  return axios({
    method: "POST",
    url: 'api/session',
    data: {user}
  })
};

export const deleteSession = () => {
  return axios({
    method: "DELETE",
    url: 'api/session'
  })
};