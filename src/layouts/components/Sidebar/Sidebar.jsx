import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    FollowingIcon,
    FollwingActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../Icon';
import SuggestAccounts from '~/component/SuggestAccounts';
import AccountItem from '~/component/SuggestAccounts/AccountItem';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For you"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        iconActive={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<FollowingIcon />}
                        iconActive={<FollwingActiveIcon />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        iconActive={<ExploreActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        iconActive={<LiveIcon />}
                        icon={<LiveActiveIcon />}
                    />
                </Menu>
                <SuggestAccounts label="Suggest Accounts">
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </SuggestAccounts>
                <SuggestAccounts label="Follwing Accounts">
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </SuggestAccounts>
            </aside>
        </>
    );
}

export default Sidebar;
