import classNames from 'classnames/bind';
import styles from '../users.module.scss';
import UserItem from './UserItem';

const cx = classNames.bind(styles);

function FollowingUsers() {
  return (
    <>
      {Array(2)
        .fill(0)
        .map((item, index) => (
          <UserItem key={index} />
        ))}
      <button className={cx('showMore_btn')}>See more</button>
    </>
  );
}

export default FollowingUsers;
