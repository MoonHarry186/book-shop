import Header from "../components/Header";
import Footer from "../components/Footer"
import styles from "./DefaultLayout.module.css"
import classNames from "classnames/bind";
import CartPopup from "../components/CartPopup";
import { useSelector } from "react-redux";


const cx = classNames.bind(styles)

function DefaultLayout({children}) {

	const active = useSelector(state => state.cart.active)

	return (
			<>
				<Header />
				<div className={cx("container")}>
					<div className={cx("content")}>
						{children}
					</div>
				</div>
				{active && <CartPopup />}
				<Footer />
			</>
	);
}

export default DefaultLayout;