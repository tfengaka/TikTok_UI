import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { DropdownWrapper } from '~/components/Dropdown';
import MenuHeader from './components/MenuHeader';
import MenuItem from './components/MenuItem';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() =>
            isParent ? setHistory((prev) => [...prev, item.children]) : onChange(item)
          }
        />
      );
    });
  };

  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <HeadlessTippy
      delay={[0, 700]}
      offset={[24, 10]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
          <DropdownWrapper className={cx('menu_wrapper')}>
            {history.length > 1 && (
              <MenuHeader
                title={currentMenu.title}
                onForward={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
              />
            )}
            <div className={cx('menu_body')}>{renderItems()}</div>
          </DropdownWrapper>
        </div>
      )}
      onHide={handleResetMenu}
    >
      {children}
    </HeadlessTippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
