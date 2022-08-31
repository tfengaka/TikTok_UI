import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
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
import Menu from '~/components/Menu';
import ToolTipButton from '~/components/ToolTipButton';
import ViewImage from '~/components/ViewImage';
import config from '~/config';
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
        <Link to={config.routing.Home} className={cx('logo')}>
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
              <ToolTipButton content="Messages" notifyCount={5}>
                <MessagesIcon />
              </ToolTipButton>
              <ToolTipButton content="Inbox" notifyCount={5}>
                <InboxIcon />
              </ToolTipButton>
            </React.Fragment>
          ) : (
            <Button styled="solid" primary>
              Log in
            </Button>
          )}
          <Menu
            items={isLoggedIn ? LOGGED_MENU_ITEMS : BASE_MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {isLoggedIn ? (
              <div className={cx('avatar')}>
                <ViewImage
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="avatar"
                />
              </div>
            ) : (
              <button className={cx('dots_btn')}>
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
