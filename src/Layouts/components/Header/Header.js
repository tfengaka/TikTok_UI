import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyToolTip from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { Menu } from '~/components/Dropdown';
import {
  CoinsIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessagesIcon,
  ProfileIcon,
  SettingIcon,
} from '~/components/Icons';
import ViewImage from '~/components/ViewImage';

import Searching from '../Seaching/Searching';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const BASE_MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
  },
];

const LOGGED_MENU_ITEMS = [
  {
    icon: <ProfileIcon />,
    title: 'View profile',
    to: '/profile/me',
  },
  {
    icon: <CoinsIcon />,
    title: 'Get coins',
  },
  {
    icon: <SettingIcon />,
    title: 'Settings',
    to: '/settings',
  },
  ...BASE_MENU_ITEMS,
  {
    icon: <LogoutIcon />,
    title: 'Log out',
    divider: true,
  },
];

function Header() {
  const isLoggedIn = true;

  const handleMenuChange = (item) => {
    console.log(item);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to="/" className={cx('logo')}>
          <img src={images.logo} alt="" />
        </Link>
        <Searching />
        {/* check logged */}
        <div className={cx('actions')}>
          <Button styled="outline" to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          {isLoggedIn ? (
            <React.Fragment>
              <TippyToolTip content="Messages" placement="bottom">
                <button className={cx('button')}>
                  <MessagesIcon />
                </button>
              </TippyToolTip>
              <TippyToolTip content="Inbox" placement="bottom">
                <button className={cx('button')}>
                  <InboxIcon />
                </button>
              </TippyToolTip>
            </React.Fragment>
          ) : (
            <Button styled="solid" primary>
              Log in
            </Button>
          )}
          <Menu items={isLoggedIn ? LOGGED_MENU_ITEMS : BASE_MENU_ITEMS} onChange={handleMenuChange}>
            {isLoggedIn ? (
              <div className={cx('avatar')}>
                <ViewImage
                  src="https://p16-sig-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1682072296970242.jpeg?x-expires=1661457600&x-signature=K6VcHyMKANk6XK1mS%2Fy%2BtCste1A%3D"
                  alt="avatar"
                />
              </div>
            ) : (
              <button className={cx('button', 'dots')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
