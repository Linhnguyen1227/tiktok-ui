import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);
function SuggestAccounts({ label, children }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title-account')}>{label}</p>
            {children}
            <button className={cx('see-more')}>See more</button>
        </div>
    );
}
SuggestAccounts.propType = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
};
export default SuggestAccounts;
