import { logo } from '../api/logo';

console.log(logo);

const images = {
	logo: require('~/assets/images/logo-1.jpg'),
	cart: require('~/assets/images/cart-shopping-solid.svg').default,
	searchIcon: require('~/assets/images/magnifying-glass-solid.svg').default,
	// Payment methods
	visa: require('~/assets/images/visa.png'),
	stripe: require('~/assets/images/stripe.png'),
	masterCart: require('~/assets/images/mastercart.png'),
}

export default images;