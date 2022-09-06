import React from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import { DropdownWrapper } from '~/components/Dropdown';
import { Checked } from '~/components/Icons';
import ViewImage from '~/components/ViewImage';
import { countingFormatter } from '~/utils';

import styles from '../users.module.scss';
const cx = classNames.bind(styles);

function UserItem({ data, preview }) {
  return (
    <div>
      <HeadlessTippy
        interactive
        delay={[700, 0]}
        placement="bottom-end"
        offset={[0, 0]}
        render={(attrs) =>
          preview && (
            <div tabIndex={-1} {...attrs}>
              <DropdownWrapper>
                <div className={cx('preview')}>
                  <header className={cx('preview__header')}>
                    <div className={cx('preview__header', 'avatar')}>
                      <ViewImage src={data.avatar} alt="avatar" />
                    </div>
                    <Button styled="solid" primary>
                      Follow
                    </Button>
                  </header>
                  <div className={cx('preview__body')}>
                    <div className={cx('preview__body', 'nickname')}>
                      <h4>{data.nickname}</h4>
                      {data.tick && (
                        <div className={cx('accountItem__info', 'tick')}>
                          <Checked />
                        </div>
                      )}
                    </div>
                    <span
                      className={cx('preview__body', 'fullname')}
                    >{`${data.first_name} ${data.last_name}`}</span>
                  </div>
                  <footer className={cx('preview__footer')}>
                    <div className={cx('preview__footer', 'item')}>
                      <strong>{countingFormatter(data.followings_count, 2)}</strong>
                      <span>Followers</span>
                    </div>
                    <div className={cx('preview__footer', 'item')}>
                      <strong>{countingFormatter(data.likes_count)}</strong>
                      <span>Likes</span>
                    </div>
                  </footer>
                </div>
              </DropdownWrapper>
            </div>
          )
        }
      >
        <div className={cx('accountItem')}>
          <div className={cx('accountItem__avatar')}>
            <ViewImage src={data.avatar} alt="avatar" />
          </div>
          <div className={cx('accountItem__info')}>
            <div className={cx('accountItem__info', 'nickname')}>
              <h4>{data.nickname}</h4>
              {data.tick && (
                <div className={cx('accountItem__info', 'tick')}>
                  <Checked width={14} height={14} />
                </div>
              )}
            </div>
            <p
              className={cx('accountItem__info', 'fullname')}
            >{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </HeadlessTippy>
    </div>
  );
}

UserItem.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string,
    avatar: PropTypes.string,
    full_name: PropTypes.string,
    tick: PropTypes.bool,
    followings_count: PropTypes.number,
    likes_count: PropTypes.number,
  }),
};

export default React.memo(UserItem);
