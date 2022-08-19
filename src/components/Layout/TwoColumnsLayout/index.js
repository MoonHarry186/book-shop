import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import styles from "./TwoColumnLayout.module.css";
import classNames from "classnames/bind";
import React, { useState } from "react";

const cx = classNames.bind(styles)

function TwoColumnsLayout({ children }) {

	const [productCategory, setProductCategory] = useState('All');

	return ( 
		<div className={cx("wrapper")}>
			<Header />
			<div className={cx("container")}>
					<Sidebar category={{productCategory, setProductCategory}}/>
					<div className={cx("content")}>
							{React.cloneElement(children, {productCategory: productCategory})}
					</div>
			</div>
			<Footer />
		</div>
	 );
}

export default TwoColumnsLayout;