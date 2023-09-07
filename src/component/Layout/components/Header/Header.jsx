import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import styles from './header.module.scss';
import image from '~/assets/images/index';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItems';

import Button from '~/component/Button';
//----------------
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    appendTo="parent"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1">
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('load')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button
                        // iconleft={<FontAwesomeIcon icon={faRightToBracket} />}
                        iconright={<FontAwesomeIcon icon={faRightToBracket} />}
                        primary
                        // outline
                        // rounded
                        // disabled
                        // className={cx('custom-button')}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
