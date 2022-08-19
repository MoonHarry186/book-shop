import { useEffect, useState } from "react";

function Home ({ productCategory }) {
	const [products, setProducts] = useState([])

	console.log("re-render");

	const category = productCategory;

	useEffect(() => {
		fetch("https://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query: `
					{
						products (where: {category: "${category}"}) {
							nodes {
								id
								name
								image {
									sourceUrl
								}
								... on SimpleProduct {
									price
								}
							}
						}
					}
				`
			})
		}).then(res => res.json())
			.then(res => {
				setProducts(res.data.products.nodes);
			})
	}, [category])

	console.log(products[0]);

	return ( 
		<div className="products">
			{products.map((product, index) => (
				<div key={product.id}>
					<img src={product.id} alt={product.name} />
					<h2>{product.name}</h2>
					<h2>{product.price}</h2>
				</div>
			))}
		</div>
	);
}

export default Home;