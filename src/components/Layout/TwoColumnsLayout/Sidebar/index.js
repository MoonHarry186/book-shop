import styles from "./Sidebar.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Sidebar() {
	return ( 
		<aside className={cx("wrapper")}>
			<div className={cx("inner")}>
				<ul>
					<li>categories</li>
				</ul>
				<div className={cx("banner")}>
					Banner
				</div>
			</div>
		</aside>	
	);
}

export default Sidebar;