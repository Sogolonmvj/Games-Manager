import axios from 'axios';

export const getHeaders = () => {
    return {};
}

export const getApiUrl = (path='') => {
    const url = process.env.REACT_APP_API_URL;
    return `${url}${path}`;
};

// export const apiRequest = (method, path, data, options) => {
//     const url = getApiUrl(path);
//     const options = {
//         headers: getHeaders(),
//     };
//     return axios.post(url, data, options);
// }

export const apiGet = (path) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.post(url, options);
};

export const apiPost = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.post(url, data, options);
};

export const apiPut = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.post(url, data, options);
};

export const apiDelete = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.post(url, data, options);
};
