import React from 'react';
import Header from '../components/Header/Header';

import classNames from 'classnames/bind';
import styles from './NoneSideBarLayout.module.scss';

const cx = classNames.bind(styles);

function NoneSideBarLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default NoneSideBarLayout;
