import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://db-project-back.herokuapp.com/',
});

