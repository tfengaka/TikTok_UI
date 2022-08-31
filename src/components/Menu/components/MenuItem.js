import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Menu.module.scss';
import Button from '~/components/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classNames = cx('menu_item', { divider: data.divider ? 'divider' : '' });
  return (
    <Button
      styled="none"
      size="md"
      leftIcon={data.icon}
      className={classNames}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
