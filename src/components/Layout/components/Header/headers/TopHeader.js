import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './TopHeader.module.css';

const cx = classNames.bind(styles);

function TopHeader() {
	return ( 
		<div className={cx("top-header")}>
			<div className={cx("inner", "global-inner")}>
				<div className={cx('number-phone')}>
					<Link to="/" className={cx("finding-a-book")}><span>Find a Book Store</span></Link>
					<FontAwesomeIcon icon={faPhone} className={cx("phone")}/>
					<a href="tel:18408412569" className={cx("number")}>+1 840-841 25 69</a>
				</div>
				<div className={cx('social-media')}>
					<ul>
						<li><Link to="/facebook"><FontAwesomeIcon icon={faFacebook} /></Link></li>
						<li><Link to="/twitter"><FontAwesomeIcon icon={faTwitter} /></Link></li>
						<li><Link to="/instagram"><FontAwesomeIcon icon={faInstagram} /></Link></li>
						<li><Link to="/pinterest"><FontAwesomeIcon icon={faPinterest} /></Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TopHeader;