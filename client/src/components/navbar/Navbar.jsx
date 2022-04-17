import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";

// import render Navbar
import LoginNavbar from "./LoginNavbar";
import LogoutNavbar from "./LogoutNavbar";

import "./Navbar.css";

const Navbar = () => {

	const stateObject = useSelector(state => state.Reducer);

	if(stateObject.loading){
		return <Loading/>
	}

	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid ">

					<NavLink className="navbar-brand" to="/">
						<span className="fw-bold"> LOGIN SYSTEM</span>
					</NavLink>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					
					{stateObject.state ? <LogoutNavbar /> : <LoginNavbar />}
				</div>

			</nav>
		</div>
	);
};

export default Navbar;
