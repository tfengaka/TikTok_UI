import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Rollforward } from '~/components/Icons';
import styles from '../Menu.module.scss';
const cx = classNames.bind(styles);

function MenuHeader({ title, onForward }) {
  return (
    <div className={cx('header')}>
      <button className={cx('rollback')} onClick={onForward}>
        <Rollforward />
      </button>
      <h4 className={cx('header_title')}>{title}</h4>
    </div>
  );
}

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
};

export default MenuHeader;
