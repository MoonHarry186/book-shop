import styles from "./Button.module.css";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({type}) {

	return ( 
		<Link to="/">
			<button className={cx('button', type)}>
				<span className={cx('text')}>Shop Now</span>
				<span className={cx('icon')}>
					<FontAwesomeIcon icon={faAngleRight} />
				</span>
			</button>
		</Link>
	 );
}

export default Button;