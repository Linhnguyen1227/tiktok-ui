import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItems({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="#" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span> {data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCircleCheck}
                        />
                    )}
                </h4>
                <span className={cx('username')}> {data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItems;
