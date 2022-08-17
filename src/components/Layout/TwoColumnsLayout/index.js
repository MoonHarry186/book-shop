import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";

function TwoColumnsLayout({ children }) {
	return ( 
		<div>
			<Header />
			<div className="container">
					<Sidebar />
					<div className="content">
							{children}
					</div>
			</div>
			<Footer />
		</div>
	 );
}

export default TwoColumnsLayout;