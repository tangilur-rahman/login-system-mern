// fontawesome-icon
import {
	faAt,
	faBriefcase,
	faKey,
	faLock,
	faMapLocation,
	faSquarePhone,
	faUserLarge
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// react-router-dom
import { NavLink, useNavigate } from "react-router-dom";

// import singup image
import signupPic from "./../images/signup.jpg";

// import css
import "./Signup.css";

// react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

const Signup = () => {

	// For Redirect "/login"
	const Navigate = useNavigate();

	
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		profession: "",
		password: "",
		cpassword: ""
	});

	const { name, email, phone, address, profession, password, cpassword } = user;

	const onChangeHandler = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const submitHandle = async (event) => {
		event.preventDefault();

		const userObject = {
			name,
			email,
			phone,
			address,
			profession,
			password,
			cpassword
		};

		try {
			const response = await fetch("/signup", {
				method: "POST",
				body: JSON.stringify(userObject),
				headers: {
					"Content-Type": "application/json"
				}
			});

			const result = await response.json();

			if (result.error) {
				toast.warn(result.error, {
					position: "top-center",
					theme: "colored"
				});
			} else {
				toast.success("Login Successfully", {
					position: "top-center",
					theme: "colored",
					autoClose: 3000
				});
				setTimeout(() => {
					return Navigate("../login");
				}, 4000);
			}

		} catch (error) {
			toast.error(error.message, {
				position: "top-center",
				theme: "colored"
			});
		}
	};

	return (
		<div className="container-fluid" id="reg-container">
			<div
				className="row shadow p-3 p-lg-4 mb-4 mb-lg-5 rounded"
				id="row-container"
			>

				{/* first section start  */}
				<div className="col-lg-6 ">
					<form method="POST" encType="application/x-www-form-urlencoded">
						<h2 id="reg-header">Sign Up</h2>
						<label htmlFor="name">
							<FontAwesomeIcon icon={faUserLarge} />
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your Name..."
							onChange={onChangeHandler}
						/>
						<hr />
						<label htmlFor="email">
							<FontAwesomeIcon icon={faAt} />
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your Email..."
							onChange={onChangeHandler}
						/>
						<hr />
						<label htmlFor="phone">
							<FontAwesomeIcon icon={faSquarePhone} />
						</label>
						<input
							type="phone"
							name="phone"
							id="phone"
							placeholder="Mobile Number..."
							onChange={onChangeHandler}
						/>
						<hr />
						<label htmlFor="address">
							<FontAwesomeIcon icon={faMapLocation} />
						</label>
						<input
							type="text"
							name="address"
							id="address"
							placeholder="Your Address..."
							onChange={onChangeHandler}
						/>
						<hr />
						<label htmlFor="profession">
							<FontAwesomeIcon icon={faBriefcase} />
						</label>
						<input
							type="text"
							name="profession"
							id="profession"
							placeholder="Your Profession..."
							onChange={onChangeHandler}
						/>
						<hr />
						<label htmlFor="password">
							<FontAwesomeIcon icon={faKey} />
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password..."
							onChange={onChangeHandler}
						/>
						<hr />
						<label htmlFor="cpassword">
							<FontAwesomeIcon icon={faLock} />
						</label>
						<input
							type="password"
							name="cpassword"
							id="cpassword"
							placeholder="Confirm Your Password..."
							onChange={onChangeHandler}
						/>
						<hr />
						<button type="submit" onClick={submitHandle}>
							Register
						</button>
						<br />
						<div className="link-container">
							<NavLink to="../login" className="d-lg-none link">
								I am already Register
							</NavLink>
						</div>
					</form>
				</div>
				{/* first section end  */}

				{/* second section start  */}
				<div className="col-lg-6 d-lg-flex d-none" id="sec-column">
					<img src={signupPic} alt="signup" className="img-fluid" />
					<div className="link-container" id="link-container">
						<NavLink to="../login" className="link">
							I am already Register
						</NavLink>
					</div>
				</div>
				{/* second section end  */}
        
			</div>
			<ToastContainer />
		</div>
	);
};

export default Signup;
