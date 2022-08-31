import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button({
  styled = 'none',
  size = 'md',
  primary,
  leftIcon,
  rightIcon,
  disabled,
  to,
  href,
  className,
  onClick,
  children,
  ...rest
}) {
  let Element = 'button';
  const classes = cx('wrapper', {
    [className]: className,
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

Button.propTypes = {
  styled: PropTypes.oneOf(['none', 'solid', 'outline', 'rounded']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  primary: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
