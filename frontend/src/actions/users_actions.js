import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveUser = (user) => ({
  type: "RECEIVE_USER",
  user: user
})

export const fetchUser = (userId) => dispatch => {
  return UserAPI.getUser(userId).then(payload => dispatch(receiveUser(user)));
}