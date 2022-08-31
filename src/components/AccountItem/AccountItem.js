import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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
          {data.nickname}
          {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('info_verified')} />}
        </h4>
        <p className={cx('info_name')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
