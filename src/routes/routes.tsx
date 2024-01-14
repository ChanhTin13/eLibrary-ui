import config from '~/config';

import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Statistic from '~/pages/Statistic';

interface TRoute {
    path: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any> | null;
}
//không đăng nhập vẫn xem được
const publicRoutes: TRoute[] = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.statistic, component: Statistic },
];

//không đăng nhập sẽ dẫn đến trang login
const privateRoutes: TRoute[] = [];

export { publicRoutes, privateRoutes };
