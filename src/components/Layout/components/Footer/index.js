import styles from "./Footer.module.css";
import classnames from 'classnames/bind';
import Logo from "../Logo";

const cx = classnames.bind(styles);

function Footer() {
	return ( 
		<footer className={cx('wrapper')}>
			<div className={cx('inner', 'global-inner')}>
				<Logo />
				<div>
					<h2>About Us</h2>
				</div>
				<div>
					<h2>Payment Methods</h2>
				</div>
				<div>
					<h2>Contact Us</h2>
				</div>
			</div>
		</footer>
	);
}

export default Footer;