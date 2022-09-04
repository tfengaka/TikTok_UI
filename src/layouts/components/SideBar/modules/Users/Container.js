import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './users.module.scss';
const cx = classNames.bind(styles);

function Container({ title, children }) {
  return (
    <div className={cx('container')}>
      <span className={cx('container_title')}>{title}</span>
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Container;
