import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  
	return (
		<div className="container-fluid">
			<div className="row" id="error-row-container">
				<div className="col" id="error-col-container">
					<h1 id="error-header">We are Sorry, Page Not Found!</h1>
					<div id="error-link">
						<NavLink to="/" id="error-navlink" className="hover-link">
							<span>Home Page</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
