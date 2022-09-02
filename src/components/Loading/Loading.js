import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
const cx = classNames.bind(styles);

function Loading({ className }) {
  return <div className={cx('circle-loading', className)}></div>;
}
Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
