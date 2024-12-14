import axios from 'axios';

const BASE_URL = 'http://10.10.131.114:8080/';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const _get = (url, config = {}) => {
    return apiClient.get(url, config);
};

const _delete = (url, config = {}) => {
    return apiClient.delete(url, config);
};

const _put = (url, data = {}, config = {}) => {
    return apiClient.put(url, data, config);
};

const _post = (url, data = {}, config = {}) => {
    return apiClient.post(url, data, config);
};

// Export API methods
export { _get, _delete, _put, _post };