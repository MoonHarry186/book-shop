import styles from "./Footer.module.css";
import classnames from 'classnames/bind';
import Logo from "../Logo";
import { Link } from 'react-router-dom';
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
 
const cx = classnames.bind(styles);

function Footer() {
	const paymentImageWidth = 60;
	const paymentImageHeight = 40;

	return ( 
		<footer className={cx('wrapper')}>
			<div className={cx('inner', 'global-inner')}>
				<Logo 
					width={120}
					height={120}
				/>
				<div>
					<h2>About Us</h2>
					<ul>
						<li><Link to="/about-us">Introduce</Link></li>
						<li><Link to="/privacy-pollicy">Privacy Policy</Link></li>
						<li><Link to="/terms">Terms of Business</Link></li>
					</ul>
				</div>
				<div>
					<h2>Payment Methods</h2>
					<ul className={cx('list')}>
						<li><Link to="/"><img src={images.visa} alt="Visa" width={paymentImageWidth} height={paymentImageHeight}/></Link></li>
						<li><Link to="/"><img src={images.stripe} alt="Stripe" width={paymentImageWidth} height={paymentImageHeight}/></Link></li>
						<li><Link to="/"><img src={images.masterCart} alt="Master Cart" width={paymentImageWidth} height={paymentImageHeight} /></Link></li>
					</ul>
				</div>
				<div>
					<h2>Social</h2>
					<ul className={cx('list', 'socials')}>
						<li> <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link></li>
						<li> <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
						<li> <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;