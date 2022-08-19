import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  return (
    <Button styled="none" size="md" leftIcon={data.icon} className={cx('menu_item')} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
