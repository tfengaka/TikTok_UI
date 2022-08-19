import { faCircleQuestion, faEarthAsia, faEllipsisVertical, faKeyboard, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { Menu } from '~/components/Dropdown';
import Searching from '../Seaching/Searching';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const handleMenuChange = (item) => {
    console.log(item);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to="/" className={cx('logo')}>
          <img src={images.logo.default} alt="" />
        </Link>
        <Searching />
        <div className={cx('actions')}>
          <Button styled="outline" to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button styled="solid" primary>
            Log in
          </Button>
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('button')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
