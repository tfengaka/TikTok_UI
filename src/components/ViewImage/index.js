import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './viewImage.module.scss';

const ViewImage = forwardRef(
  ({ src, alt, fallbackImg = images.defaultImg, className, ...rest }, ref) => {
    const [fallback, setFallback] = useState('');
    return (
      <img
        className={classNames(styles.wrapper, className)}
        src={fallback || src}
        alt={alt}
        ref={ref}
        {...rest}
        onError={() => setFallback(fallbackImg)}
      />
    );
  },
);

ViewImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallbackImg: PropTypes.string,
  className: PropTypes.string,
};
export default ViewImage;
