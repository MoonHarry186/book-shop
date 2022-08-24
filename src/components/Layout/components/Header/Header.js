import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { TopHeader, MainHeader, BottomHeader } from './headers';

const cx = classNames.bind(styles);

function Header() {
	return ( 
		<header className={cx('wrapper')}>
			<TopHeader />
			<MainHeader />
			<BottomHeader />
		</header>
	);
}

export default Header;