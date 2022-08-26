// * Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// * Layout
import { SecondaryLayout } from '~/Layouts';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: SecondaryLayout },
  { path: '/search', component: Search, layout: null },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
