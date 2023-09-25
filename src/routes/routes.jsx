//Layouts
import config from '~/config';
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Settings from '~/pages/Settings';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, Layout: HeaderOnly },
    { path: config.routes.settings, component: Settings, Layout: HeaderOnly },
    { path: config.routes.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
