import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
