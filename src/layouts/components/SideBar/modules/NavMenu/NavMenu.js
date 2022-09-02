import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
const cx = classNames.bind(styles);

function NavMenu({ children }) {
  return <nav className={cx('nav_menu')}>{children}</nav>;
}

NavMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavMenu;
