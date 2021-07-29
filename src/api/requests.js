import axios from "axios";

export const fetchUsersFromApi = (number) => axios.get('https://reqres.in/api/users', {
    params: {
        page: number,
    }
});

export const registerUserApi = (data) => axios.post('https://reqres.in/api/register', {
    email: data.email,
    password: data.password
});

export const signinUserApi = ({login, password}) => axios.post('https://reqres.in/api/login', {
    email: login,
    password
});

