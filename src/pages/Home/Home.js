import { Banner } from "./Banner";
import { BestSalingBooks } from "./BestSalingBooks";
import styles from "./Home.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Home () {
		return ( 
			<div className={cx('home')}>
				<div className={cx('container')}>
						<Banner />
						<BestSalingBooks />
				</div>
			</div>
		);
}

export default Home;