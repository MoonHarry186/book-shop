import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import styles from "./TwoColumnLayout.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function TwoColumnsLayout({ children }) {
	return ( 
		<div className={cx("wrapper")}>
			<Header />
			<div className={cx("container")}>
					<Sidebar />
					<div className={cx("content")}>
							{children}
					</div>
			</div>
			<Footer />
		</div>
	 );
}

export default TwoColumnsLayout;