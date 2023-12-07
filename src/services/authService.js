import httpRequest from '~/utils/httpRequest';

const login = async (username, password) => {
    try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const response = await httpRequest.post('/api/Account/Login', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.status === 200) {
            // Đăng nhập thành công
            const { token, refreshToken, refreshTokenExpires } = response.data;

            const StorageData = {
                theRefresh: {
                    refreshToken,
                    refreshTokenExpires,
                },
                token: token,
            };
            localStorage.setItem('StorageData', JSON.stringify(StorageData));

            return response.data;
        } else {
            // trạng thái khác 200
            console.error('Unexpected status code:', response.status);
            throw new Error('Unexpected status code');
        }
    } catch (error) {
        throw error;
    }
};

const logout = async () => {
    try {
        localStorage.removeItem('StorageData');

        return { status: 200, message: 'Logout successful' };
    } catch (error) {
        throw error;
    }
};
const refreshToken = async () => {
    try {
        //lấy ra refreshToken
        const storageData = localStorage.getItem('StorageData');
        const accessTokenObject = JSON.parse(storageData);
        const refreshToken = accessTokenObject.theRefresh.refreshToken;
        const param = { RefreshToken: refreshToken };

        return await httpRequest.post('/api/RefreshToken', param).then((response) => {
            if (response.status === 200) {
                // Đăng nhập thành công
                const { token, refreshToken, refreshTokenExpires } = response.data;
                const StorageData = {
                    theRefresh: {
                        refreshToken,
                        refreshTokenExpires,
                    },
                    token: token,
                };
                localStorage.setItem('StorageData', JSON.stringify(StorageData));

                return response.data;
            } else {
                // trạng thái khác 200
                console.error('Unexpected status code:', response.status);
                throw new Error('Unexpected status code');
            }
        });
    } catch (error) {
        throw error;
    }
};
const authService = {
    login,
    logout,
    refreshToken,
};
export default authService;
