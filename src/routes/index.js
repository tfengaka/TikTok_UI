import config from '~/config';
import { SecondaryLayout } from '~/layouts';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

const publicRoutes = [
  { path: config.routing.Home, component: Home },
  { path: config.routing.Following, component: Following },
  { path: config.routing.Profile, component: Profile },
  { path: config.routing.Upload, component: Upload, layout: SecondaryLayout },
  { path: config.routing.Search, component: Search, layout: null },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
