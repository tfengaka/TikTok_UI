import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
const cx = classNames.bind(styles);

function NavItem({ title, icon, activeIcon, link }) {
  const resolved = useResolvedPath(link);
  const isMatchPath = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink className={({ isActive }) => cx('nav_item', { active: isActive })} to={link}>
      {isMatchPath ? activeIcon : icon}
      <h3 className={cx('title')}>{title}</h3>
    </NavLink>
  );
}
NavItem.propTypes = {
  icon: PropTypes.node,
  activeIcon: PropTypes.node,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default NavItem;
