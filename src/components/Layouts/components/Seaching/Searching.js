import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React from 'react';
import AccountItem from '~/components/AccountItem';
import { DropdownWrapper } from '~/components/Dropdown';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Searching() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResults.length > 0}
        placement="bottom"
        render={(attrs) => (
          <div className={cx('search_result')} tabIndex="-1" {...attrs}>
            <DropdownWrapper>
              <div className={cx('search_account')}>
                <h4 className={cx('search_account_title')}>Accounts</h4>
                {searchResults.map((result, index) => (
                  <AccountItem key={index} data={result} />
                ))}
              </div>
            </DropdownWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
          <div className={cx('input_action')}>
            {isLoading ? (
              <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />
            ) : (
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
          </div>
          <span className={cx('splitter')}></span>
          <button className={cx('search_btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Searching;
