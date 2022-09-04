import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Checked } from '~/components/Icons';
import ViewImage from '~/components/ViewImage';
import styles from '../users.module.scss';
const cx = classNames.bind(styles);

function UserItem({ data }) {
  return (
    <div className={cx('accountItem')}>
      <div className={cx('accountItem__avatar')}>
        <ViewImage
          src={
            'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/e7b9db475cba9fa98f1b7e055bf6712d~c5_100x100.jpeg?x-expires=1662472800&x-signature=l18TVBa2aIs%2FHpU8KV%2BhVtElZbQ%3D'
          }
          alt="avatar"
        />
      </div>
      <div className={cx('accountItem__info')}>
        <div className={cx('accountItem__info', 'nickname')}>
          <h4>mocachodiesasasasasasan</h4>
          {true && (
            <div className={cx('accountItem__info', 'tick')}>
              <Checked width={14} height={14} />
            </div>
          )}
        </div>
        <p className={cx('accountItem__info', 'fullname')}>AnNhiên ❤️ BốiBối</p>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string,
    avatar: PropTypes.string,
    full_name: PropTypes.string,
    tick: PropTypes.bool,
  }),
};

export default UserItem;
