//Layouts
import ConfigRouter from '~/config/routes';
import { HeaderOnly } from '~/component/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Settings from '~/pages/Settings';

const publicRoutes = [
    { path: ConfigRouter.home, component: Home },
    { path: ConfigRouter.following, component: Following },
    { path: ConfigRouter.profile, component: Profile },
    { path: ConfigRouter.upload, component: Upload, Layout: HeaderOnly },
    { path: ConfigRouter.settings, component: Settings, Layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
