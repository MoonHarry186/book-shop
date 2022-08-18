import { Link } from "react-router-dom";
import images from "~/assets/images";

function Logo({width, height}) {
	return ( 
		<Link to="/">
			<img 
			width={width} 
			height={height} 
			src={images.logo}
			alt="Logo"	
		/>
		</Link>
	);
}

export default Logo;