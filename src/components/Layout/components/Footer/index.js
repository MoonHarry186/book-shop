import styles from "./Footer.module.css";
import classnames from 'classnames/bind';
 
const cx = classnames.bind(styles);

function Footer() {

	return ( 
		<div className={cx('wrapper')}>
			Footer
		</div>
	);
}

export default Footer;