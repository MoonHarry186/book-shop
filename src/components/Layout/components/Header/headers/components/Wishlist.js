import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import classNames from "classnames/bind";
import styles from "../MainHeader.module.css";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Wishlist() {
	return ( 
		<li>
			<Link to='wishlist'>
					<FontAwesomeIcon icon={faHeart} />
			</Link>
			<span className={cx('count')}>1</span>
		</li>
	);
}

export default Wishlist;