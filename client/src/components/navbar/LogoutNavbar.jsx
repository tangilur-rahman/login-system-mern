import { NavLink } from "react-router-dom";

const LogoutNavbar = () => {
	return (
		<div className="collapse navbar-collapse " id="navbarSupportedContent">
			<ul className="navbar-nav me-4 mb-2 mb-lg-0 w-100  justify-content-end">
				<li className="nav-item pe-4">
					<NavLink
						aria-current="page"
						to="/"
						className="nav-link navbar-hover-link"
					>
						Home
					</NavLink>
				</li>

				<li className="nav-item pe-4">
					<NavLink className="nav-link navbar-hover-link" to="profile">
						Profile
					</NavLink>
				</li>

				<li className="nav-item pe-4">
					<NavLink className="nav-link navbar-hover-link" to="contract">
						Contract
					</NavLink>
				</li>

				<li className="nav-item pe-4">
					<NavLink className="nav-link navbar-hover-link" to="logout">
						LogOut
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default LogoutNavbar;
