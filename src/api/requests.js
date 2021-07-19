import axios from "axios";

export const fetchUsersFromApi = () => axios.get('https://reqres.in/api/users', {
    params: {
        page: 1,
    }
});

export const registerUsersApi = () => axios.post('https://reqres.in/api/register', {
    email: newEmail,
    password: newPassword
});