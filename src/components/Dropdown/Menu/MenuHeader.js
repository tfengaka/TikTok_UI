import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({ title, onForward }) {
  return (
    <div className={cx('header')}>
      <button className={cx('rollback')} onClick={onForward}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <h4 className={cx('header_title')}>{title}</h4>
    </div>
  );
}

export default MenuHeader;
