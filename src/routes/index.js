// Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import AboutUs from '~/pages/AboutUs';
import BookDetail from '~/pages/BookDetail';
import Checkout from '~/pages/Checkout';

// Khong dang nhap van truy cap duoc
const publicRoutes = [
	{ id:1, path: '/', component: Home },
	{ id:2, path: '/cart', component: Cart },
	{ id:3, path: '/about-us', component: AboutUs },
	{ id:4, path: '/book-detail', component: BookDetail },
	{ id:5, path: '/checkout', component: Checkout },
]

// Dang nhap vao moi truy cap duoc
const privateRoutes = [

]

export {publicRoutes, privateRoutes}
