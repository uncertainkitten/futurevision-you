import axios from 'axios';

export const getUser = (userId) => {
  return axios({
    method: "GET",
    url: `/api/users/${userId}`
  })
}