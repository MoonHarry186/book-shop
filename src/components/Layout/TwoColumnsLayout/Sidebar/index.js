import styles from "./Sidebar.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Sidebar() {
	return ( 
		<aside className={cx("wrapper")}>
			Sidebar
		</aside>	
	);
}

export default Sidebar;