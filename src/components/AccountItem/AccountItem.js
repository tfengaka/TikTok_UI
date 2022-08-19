import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx('account')}>
      <div className={cx('avatar')}>
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8a97ef3da44f0b2c4962a2ca835220de~c5_100x100.jpeg?x-expires=1660892400&x-signature=%2F%2BR6cevLMy0%2B7P%2BGXzQ8MhD4%2FO8%3D"
          alt="avatar"
        />
      </div>
      <div className={cx('info')}>
        <h4 className={cx('info_nickname')}>
          hoa_2309
          <FontAwesomeIcon icon={faCircleCheck} className={cx('info_verified')} />
        </h4>
        <p className={cx('info_name')}>Ngô Ngọc Hoà🦄</p>
      </div>
    </div>
  );
}

export default AccountItem;
