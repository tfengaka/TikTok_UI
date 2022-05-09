import { faCircleCheck, faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import images from '~/assets/images';
import { Wrapper as DropdownWrapper } from '~/components/Dropdown';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo.default} alt="" />

        <div className={cx('search')}>
          <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
          <div className={cx('input_action')}>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />
          </div>
          <span className={cx('splitter')}></span>
          <button className={cx('search_btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <DropdownWrapper>
            <div className={cx('search_account')}>
              <div className={cx('search_account_title')}>Accounts</div>
              <div className={cx('search_account_item')}>
                <div className={cx('avatar')}>
                  <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4fef3f0e47016f7da8a20669951d429f~c5_300x300.webp?x-expires=1652187600&x-signature=lvHL9gNLCKCScL2E5UeX5wqyvjk%3D"
                    alt="avatar"
                  />
                </div>
                <div className={cx('info')}>
                  <h4 className={cx('info_name')}>
                    hoa_2309
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('info_verified')} />
                  </h4>
                  <p className={cx('info_desc')}>Ngô Ngọc Hoà🦄</p>
                </div>
              </div>
              <div className={cx('search_account_item')}>
                <div className={cx('avatar')}>
                  <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4fef3f0e47016f7da8a20669951d429f~c5_300x300.webp?x-expires=1652187600&x-signature=lvHL9gNLCKCScL2E5UeX5wqyvjk%3D"
                    alt="avatar"
                  />
                </div>
                <div className={cx('info')}>
                  <h4 className={cx('info_name')}>
                    hoa_2309
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('info_verified')} />
                  </h4>
                  <p className={cx('info_desc')}>Ngô Ngọc Hoà🦄</p>
                </div>
              </div>
            </div>
          </DropdownWrapper>
        </div>
        <div className={cx('actions')}>actions</div>
      </div>
    </header>
  );
}

export default Header;
