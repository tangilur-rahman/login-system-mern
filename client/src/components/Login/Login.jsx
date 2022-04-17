//  fontawesome-icon
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// react library
import { useState } from "react";
import { useDispatch } from "react-redux";

// react-router-dom
import { NavLink, useNavigate } from "react-router-dom";

// react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logInActionCreator } from "./../../service/Action/Action";

// import login image
import loginPic from "./../images/login.jpg";

//import css
import "./Login.css";

const Login = () => {
	// For Redirect "/home"
	const Navigate = useNavigate();

	const dispatch = useDispatch();

	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const { email, password } = user;

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		if (name === "email") {
			setUser({ email: value, password });
		} else {
			setUser({ email, password: value });
		}
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		const userObject = {
			email,
			password
		};

		try {
			const response = await fetch("/login", {
				method: "POST",
				body: JSON.stringify(userObject),
				headers: { "Content-Type": "application/json" }
			});

			const result = await response.json();

			if (result.error) {
				toast.warn(result.error, {
					position: "top-center",
					theme: "colored"
				});
			} else {
				toast.success("Login Successfully ❤️", {
					position: "top-center",
					theme: "colored",
					autoClose: 2000
				});
				setTimeout(() => {
					dispatch(logInActionCreator());
					return Navigate("/");
				}, 3000);
			}
		} catch (error) {
			toast.error(error.message, {
				position: "top-center",
				theme: "colored"
			});
		}

		setUser({
			email: "",
			password: ""
		});
	};

	return (
		<div className="container-fluid" id="log-container">
			<div className="row shadow p-3 p-lg-4 mb-4 mb-lg-5 rounded" id="log-row">
				{/* first section start  */}
				<div className="col-lg-6 d-lg-flex d-none" id="log-first-column">
					<img src={loginPic} alt="login" className="img-fluid log-img" />

					<div className="log-link-container" id="log-link-container">
						<NavLink to="../register" className="link">
							Create An Account
						</NavLink>
					</div>
				</div>

				{/* first section end */}

				{/* second section start */}
				<div className="col-lg-6 ">
					<form method="POST" encType="application/x-www-form-urlencoded">
						<h2 id="log-header">LogIn</h2>
						<label htmlFor="email">
							<FontAwesomeIcon icon={faAt} />
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="log-input"
							placeholder="Your Email..."
							onChange={onChangeHandler}
							value={email}
						/>
						<hr />
						<label htmlFor="password">
							<FontAwesomeIcon icon={faKey} />
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="log-input"
							placeholder="Password..."
							onChange={onChangeHandler}
							value={password}
						/>
						<hr />
						<button type="submit" onClick={submitHandler} id="log-button">
							LogIn
						</button>{" "}
						<br />
						<div className="log-link-container">
							<NavLink to="../register" className="d-lg-none link">
								Create An Account
							</NavLink>
						</div>
					</form>
				</div>
				{/* second section end */}
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;
