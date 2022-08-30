import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { DropdownWrapper } from '~/components/Dropdown';
import styles from './Menu.module.scss';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);

  const currentMenu = history[history.length - 1];
  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem key={index} data={item} onClick={() => (isParent ? setHistory((prev) => [...prev, item.children]) : onChange(item))} />
      );
    });
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
              <MenuHeader title={currentMenu.title} onForward={() => setHistory((prev) => prev.slice(0, prev.length - 1))} />
            )}
            <div className={cx('menu_body')}>{renderItems()}</div>
          </DropdownWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </HeadlessTippy>
  );
}

export default Menu;
