import config from '~/config';
import { SecondaryLayout } from '~/layouts';
import { FollowingPage, HomePage, LivePage, ProfilePage, SearchPage, UploadPage } from '~/pages';

const publicRoutes = [
  { path: config.routing.Home, component: HomePage },
  { path: config.routing.Following, component: FollowingPage },
  { path: config.routing.Profile, component: ProfilePage },
  { path: config.routing.Upload, component: UploadPage, layout: SecondaryLayout },
  { path: config.routing.Search, component: SearchPage, layout: null },
  { path: config.routing.Live, component: LivePage },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
