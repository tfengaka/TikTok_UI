import classNames from 'classnames/bind';
import {
  GroupUserOutline,
  GroupUserSolid,
  HomeOutline,
  HomeSolid,
  LiveOutline,
  LiveSolid,
} from '~/components/Icons';
import { UsersContainer, FollowingUsers, NavMenu, SuggestedUsers } from './modules';

import config from '~/config';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const NAV_LINK = [
  {
    icon: <HomeOutline />,
    activeIcon: <HomeSolid />,
    title: 'For You',
    link: config.routing.Home,
  },
  {
    icon: <GroupUserOutline />,
    activeIcon: <GroupUserSolid />,
    title: 'Following',
    link: config.routing.Following,
  },
  {
    icon: <LiveOutline />,
    activeIcon: <LiveSolid />,
    title: 'Live',
    link: config.routing.Live,
  },
];

function SideBar() {
  return (
    <aside className={cx('sidebar')}>
      <div className={cx('wrapper')}>
        <NavMenu>
          {NAV_LINK.map((item, index) => (
            <NavMenu.Item
              key={index}
              icon={item.icon}
              activeIcon={item.activeIcon}
              title={item.title}
              link={item.link}
            />
          ))}
        </NavMenu>
        <UsersContainer title="Suggested accounts">
          <SuggestedUsers />
        </UsersContainer>
        <UsersContainer title="Following accounts">
          <FollowingUsers />
        </UsersContainer>
      </div>
    </aside>
  );
}

export default SideBar;
