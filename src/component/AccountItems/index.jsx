import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a2f1a9b42f079a9b94ff1aacdc5302e3~c5_300x300.webp?x-expires=1694174400&x-signature=no98lTVfkb5w4Ve1jKhFkfxTA9k%3D"
                alt="#"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span> Linh LInh</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </h4>
                <span className={cx('username')}> ling12hgh@</span>
            </div>
        </div>
    );
}

export default AccountItems;
