import classNames from 'classnames/bind';

import styles from '../users.module.scss';
import AccountItem from './UserItem';

const cx = classNames.bind(styles);
function SuggestedUsers() {
  return (
    <>
      {Array(2)
        .fill(0)
        .map((item, index) => (
          <AccountItem key={index} />
        ))}
      <button className={cx('showMore_btn')}>See all</button>
    </>
  );
}

export default SuggestedUsers;
