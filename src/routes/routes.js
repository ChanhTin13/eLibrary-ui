import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Statistic from '~/pages/Statistic';

//không đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.statistic, component: Statistic },
];

//không đăng nhập sẽ dẫn đến trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
