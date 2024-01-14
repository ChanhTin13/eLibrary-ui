import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface HttpRequest {
    get: (url: string, config?: any) => Promise<AxiosResponse>;
    post: (url: string, data?: any, config?: any) => Promise<AxiosResponse>;
    // Thêm các phương thức khác nếu cần thiết
}
const httpRequest: AxiosInstance & HttpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// export const get = async (path, options = {}) => {
//     const response = await httpRequest.get(path, options);
//     return response.data;
// };

export default httpRequest;
