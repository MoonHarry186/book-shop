// Base URL
const base_url = 'https://72.arrowhitech.net/tn1/harry-moon/wordpress/graphql'

// Request init
const resquest_init = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	
}

// Products
export const productsListAPI = async () => {
	const response = await fetch(base_url, {
		...resquest_init,
		body: JSON.stringify({
			query: `
				{
					products {
					nodes {
						... on SimpleProduct {
						productFields {
							author
						}
						id
						name
						price
						regularPrice
						salePrice
						image {
							altText
							slug
							sourceUrl
						}
						}
					}
					}
				}
			`
		})
	}).then(res => res.json())
		.then(res => res.data.products.nodes)
	return response;
}

// Product Categories
export const categoriesAPI = async () => {
	const response = await fetch(base_url, {
		...resquest_init,
		body: JSON.stringify({
			query: `
			{
				productCategories {
					edges {
						node {
							id
							name
						}
					}
				}
			}
			`
		})
	}).then(res => res.json())
		.then(res => res.data.productCategories.edges)
	return response;
}

// Product Categories
export const productsAPI = async (searchValue) => {
	const response = await fetch(base_url, {
		...resquest_init,
		body: JSON.stringify({
			query:  `
				{
					products (first: null, after: null, where:{search: "${searchValue}"}) {
						edges {
							node {
								id
								name
								slug
							}
						}
					}
				}
			`
		})
	}).then(res => res.json())
		.then(res => res.data.products.edges)
		
	return response;
}

// Logo 
export const logoAPI = async () => {
	const response = await fetch(base_url, {
		...resquest_init,
		body: JSON.stringify({
			query: `
				{
					mediaItems (where: {title: "logo"}) {
						edges {
							node {
								sourceUrl
							}
						}
					}
				}
			`,
		}),
	}).then(res => res.json())
		.then(res => res.data.mediaItems.edges[0].node.sourceUrl)
		
	return response
}


