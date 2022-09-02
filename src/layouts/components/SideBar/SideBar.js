import React from 'react';
import classNames from 'classnames/bind';
import { NavMenu } from './modules';
import {
  GroupUserOutline,
  HomeOutline,
  LiveOutline,
  HomeSolid,
  GroupUserSolid,
  LiveSolid,
} from '~/components/Icons';

import styles from './Sidebar.module.scss';
import config from '~/config';
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
      </div>
    </aside>
  );
}

export default SideBar;
