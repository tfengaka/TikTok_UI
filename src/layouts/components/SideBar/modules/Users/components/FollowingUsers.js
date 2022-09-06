import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import styles from '../users.module.scss';
import AccountItem from './UserItem';
const cx = classNames.bind(styles);

function FollowingUsers({ userList }) {
  return (
    <React.Fragment>
      {userList.length > 0 &&
        userList.map((user, index) => <AccountItem key={index} data={user} preview={false} />)}
      <button className={cx('showMore_btn')}>See more</button>
    </React.Fragment>
  );
}
FollowingUsers.propTypes = {
  userList: PropTypes.array,
};
export default FollowingUsers;
