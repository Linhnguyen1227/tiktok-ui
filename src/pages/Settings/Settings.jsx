import classNames from 'classnames/bind';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    return (
        <div className={cx('wrapper')}>
            <h2>Setting page</h2>
        </div>
    );
}

export default Settings;
