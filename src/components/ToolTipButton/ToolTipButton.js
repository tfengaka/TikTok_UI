import React from 'react';
import PropTypes from 'prop-types';
import TippyToolTip from '@tippyjs/react';

import styles from './ToolTipButton.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ToolTipButton({ content, notifyCount, onClick, children }) {
  return (
    <TippyToolTip content="Messages" placement="bottom">
      <button className={cx('tooltip_btn')} onClick={onClick}>
        {children}
        <div className={cx('notify')}>
          <span>{notifyCount}</span>
        </div>
      </button>
    </TippyToolTip>
  );
}
ToolTipButton.propTypes = {
  content: PropTypes.string.isRequired,
  notifyCount: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
export default ToolTipButton;
