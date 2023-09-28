// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c25ac09df0aa2ac47fee41640896d11f.jpeg?x-expires=1696064400&x-signature=WCfyQ9JPGwAX88DBaub6ciM71OQ%3D"
                    alt="#"
                />
                <a className={cx('infor')} href="/">
                    <span className={cx('nick-name')}>hgthher</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                    <p className={cx('user-name')}>gỏi cuốn mắm nêm 🌯🥺</p>
                </a>
            </div>
        </>
    );
}

export default AccountItem;
