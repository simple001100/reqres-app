import axios from 'axios';

export const fetchUsersFromApi = number =>
  axios.get('https://reqres.in/api/users', {
    params: {
      page: number,
    },
  });

export const registerUserApi = ({login, password}) =>
  axios.post('https://reqres.in/api/login', {
    email: login,
    password,
  });

export const signinUserApi = ({login, password}) =>
  axios.post('https://reqres.in/api/register', {
    email: login,
    password,
  });

export const fetchUserDataApi = number =>
  axios.get(`https://reqres.in/api/users/${number}`);
