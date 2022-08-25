import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './viewImage.module.scss';

const ViewImage = forwardRef(({ src, alt, className, ...rest }, ref) => {
  const [fallback, setFallback] = useState('');
  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      ref={ref}
      {...rest}
      onError={() => setFallback(images.defaultImg)}
    />
  );
});

export default ViewImage;
