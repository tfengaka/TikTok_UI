import React from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Wrapper({ children, className }) {
  return <div className={cx('dropdown', className)}>{children}</div>;
}

export default Wrapper;
