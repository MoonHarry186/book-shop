import styles from "./Sidebar.module.css";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Sidebar(props) {

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("https://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
					{
						productCategories {
							nodes {
								id
								name
							}
						}
					}
				`
			})
		}).then((res) => res.json())
			.then((res) => {
				setCategories(res.data.productCategories.nodes)
			})
	}, []);

	return ( 
		<aside className={cx("wrapper")}>
			<div className={cx("inner")}>
				<ul>
					{categories.map((category, index) => (
						<li 
							onClick={() => props.category.setProductCategory(category.name)} 
							key={category.id}
							style={props.category.productCategory === category.name ? {color: "orange"} : {}}
						>
							{category.name}
						</li>
					))}
				</ul>
				<div className={cx("banner")}>
					Banner
				</div>
			</div>
		</aside>	
	);
}

export default Sidebar;