import axios from 'axios';

const DOMAIN = 'https://tiktok.fullstack.edu.vn/api/';

const httpRequest = axios.create({
    baseURL: DOMAIN,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
