import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Checked } from '../Icons';
import ViewImage from '../ViewImage';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

AccountItem.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string,
    avatar: PropTypes.string,
    full_name: PropTypes.string,
    tick: PropTypes.bool,
  }).isRequired,
};
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('account')}>
      <div className={cx('avatar')}>
        <ViewImage src={data.avatar} alt="avatar" />
      </div>
      <div className={cx('info')}>
        <h4 className={cx('info_nickname')}>
          <span>{data.nickname}</span>
          {data.tick && <Checked className={cx('info_verified')} />}
        </h4>
        <p className={cx('info_name')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
