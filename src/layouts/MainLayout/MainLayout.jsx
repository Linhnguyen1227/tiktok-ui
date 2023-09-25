import Header from '../components/Header/Header';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
MainLayout.propTypes = {
    children: PropTypes.node,
};
export default MainLayout;
