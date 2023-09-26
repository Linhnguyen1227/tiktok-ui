import classNames from 'classnames/bind';
import ConfigRouter from '~/config/routes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faShop,
    faLightbulb,
    faGear,
    faMoon,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './header.module.scss';
import image from '~/assets/images/index';
import Image from '~/component/Image';

import Button from '~/component/Button';
import Menu from '../Menu/';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { IconUpload, IconMassage, IconInbox } from '../Icon';
import Search from '../Search';
//----------------
const cx = classNames.bind(styles);
const MENU_ITEM = [
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
        title: 'Keybroad',
    },
];
const MENU_USERS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorite',
        to: '/favorite',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faShop} />,
        title: 'Business Suite',
        to: '/business',
    },
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark Mode',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = false;
    //Handlelogic
    const handleOnChange = (menuItems) => {
        switch (menuItems.type) {
            case 'language':
                //handle
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={ConfigRouter.home} className={cx('logo-link')}>
                        <img src={image.logo} alt="Tiktok" />
                    </Link>
                </div>
                {/* Search */}
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                outline
                                to={ConfigRouter.upload}
                                className={cx('usercurrent-icon-upload')}
                            >
                                <IconUpload className={cx('icon-upload')} />
                                <span>Upload</span>
                            </Button>

                            <Tippy
                                content="Message"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx('usercurrent-icon')}>
                                    <IconMassage />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('usercurrent-icon')}>
                                    <IconInbox
                                        className={cx('inbox-icon')}
                                        notifi={'12'}
                                    />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                // to="/"
                                // iconleft={<FontAwesomeIcon icon={faRightToBracket} />}
                                iconright={
                                    <FontAwesomeIcon icon={faRightToBracket} />
                                }
                                primary
                                // outline
                                // rounded
                                // disabled
                                // className={cx('custom-button')}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? MENU_USERS : MENU_ITEM}
                        onChange={handleOnChange}
                        currentUser={currentUser}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('avatar-current')}
                                // fallback="https://p16-sign-va.tiktokcdn.com/tosmaliva-avt-0068/59e989e348cbc96c3acc009fdfa545e1~c5_720x720.jpeg?x-expires=1695812400&x-signature=6NqTGR1jqq%2BtTmKp01SRaVdSSBw%3D"
                                src="https://p16-sign-va.tiktokcdn/tos-maliva-avt-0068/59e989e348cbc96c3acc009fdfa545e1~c5_720x720.jpeg?x-expires=1694775600&x-signature=vulnaxjVN3c3bE%2Fbj6j5NElnE2g%3D"
                                alt="current_avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
