import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React, { useEffect, useRef } from 'react';
import { searchingUsers } from '~/apis/userApi';
import { DropdownWrapper } from '~/components/Dropdown';
import { Clear, Search } from '~/components/Icons';
import Loading from '~/components/Loading';
import { useDebounce } from '~/hooks';
import AccountList from './components/AccountList';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Searching() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const debounceQuery = useDebounce(searchQuery, 500);
  const searchInputRef = useRef(null);

  useEffect(() => {
    (async function getSearchResults() {
      if (!debounceQuery.trim()) {
        setShowResult(false);
        setSearchResults([]);
        return;
      }
      setIsLoading(true);
      try {
        const results = await searchingUsers(debounceQuery, 'less');
        if (results && results.data.length > 0) {
          setSearchResults(results.data);
          setShowResult(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [debounceQuery]);

  const handleClearSearchInput = () => {
    setSearchQuery('');
    setSearchResults([]);
    searchInputRef.current.focus();
  };

  const handleHidedSearchResult = () => {
    setShowResult(false);
  };

  const handleChangeInput = (event) => {
    const searchValue = event.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchQuery(searchValue);
    }
  };

  return (
    //* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
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
                <AccountList data={searchResults} />
              </div>
              <div
                className={cx('search_result_desc')}
              >{`View all results for "${searchQuery}"`}</div>
            </DropdownWrapper>
          </div>
        )}
        onClickOutside={handleHidedSearchResult}
      >
        <div className={cx('search')}>
          <input
            type="text"
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck={false}
            ref={searchInputRef}
            value={searchQuery}
            onFocus={() => setShowResult(true)}
            onChange={handleChangeInput}
          />
          <div className={cx('input_action')}>
            {isLoading ? (
              <Loading className={cx('loading')} />
            ) : (
              <button className={cx('clear')} onClick={() => handleClearSearchInput()}>
                <Clear />
              </button>
            )}
          </div>
          <span className={cx('splitter')}></span>
          <button className={cx('search_btn')} onMouseDown={(e) => e.preventDefault()}>
            <Search />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Searching;
