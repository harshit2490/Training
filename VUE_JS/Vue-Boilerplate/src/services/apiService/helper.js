import Axios from 'axios';
import Logger from "../logger";

export function createAxiosInstance() {
    const axios = Axios.create();

    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('x-access-token')}`;
    axios.defaults.timeout = process.env.VUE_APP_API_TIMEOUT;

    axios.interceptors.request.use(
        parseRequest,
        parseError,
    );

    axios.interceptors.response.use(
        parseSuccessResponse,
        parseError,
    );
    return axios;
}

function parseRequest(config) {
    // const token = store.getState().session.token;
    const token = localStorage.getItem('x-access-token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}

function parseSuccessResponse(response) {
    Logger.info("parseSuccessResponse => response", response);
    return response?.data;
}

function parseError(error) {
    Logger.error("parseErrorResponse => error", error);
    return Promise.reject(error)
}