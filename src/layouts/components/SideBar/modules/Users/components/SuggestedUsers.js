import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../users.module.scss';
import AccountItem from './UserItem';

const cx = classNames.bind(styles);

function SuggestedUsers({ userList }) {
  return (
    <React.Fragment>
      {userList.length > 0 &&
        userList.map((user, index) => <AccountItem key={index} data={user} preview />)}
      <button className={cx('showMore_btn')}>See all</button>
    </React.Fragment>
  );
}

SuggestedUsers.propTypes = {
  userList: PropTypes.array,
};
export default SuggestedUsers;
