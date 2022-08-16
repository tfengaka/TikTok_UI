import React from 'react';
import className from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function Button({ children, styled = 'solid', size = 'md', primary, leftIcon, rightIcon, disabled, to, href, onClick, ...rest }) {
  let Element = 'button';
  const classes = cx('wrapper', {
    [styled]: styled,
    [size]: size,
    primary: primary ? 'primary' : '',
    disabled,
  });
  const eleProps = {
    onClick,
    ...rest,
  };

  if (disabled) {
    Object.keys(eleProps).forEach((key) => {
      key.startsWith('on') && typeof eleProps[key] === 'function' && delete eleProps[key];
    });
  }

  if (to) {
    eleProps.to = to;
    Element = Link;
  } else if (href) {
    eleProps.href = href;
    Element = 'a';
  }

  return (
    <Element className={classes} {...eleProps}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Element>
  );
}
export default Button;
