import axios from 'axios';
import Utils from './Utils';

const Api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

Api.interceptors.request.use(async config => {
    config.headers.Accept = 'application/json';
    config.headers.Authorization = `Bearer ${Utils.getToken()}`;
    return config;
});

export default Api;