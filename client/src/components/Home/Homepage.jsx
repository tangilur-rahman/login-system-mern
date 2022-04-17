/* eslint-disable react-hooks/exhaustive-deps */
import "./Homepage.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import homePic from "./../images/homepage.jpg";
import Loading from "../Loading/Loading";
import {useDispatch} from "react-redux"
import {homeActionCreator} from "./../../service/Action/Action";

const Homepage = () => {

	// Get User Name
	const [userName, setUserName] = useState({});
	const [check, setCheck] = useState(true);
	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

	const getUserName = async () => {
		const response = await fetch("/home");

		const result = await response.json();

		setUserName(result.name);
		setLoading(false);
		setCheck(false);
	};
	
	useEffect(() => {
		dispatch(homeActionCreator());
		getUserName();
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="container-fluid">
					<div className="row " id="home-row-container">
						<div className="col-lg-6 " id="home-first-container">
							<h2 className="font-monospace" id="welcome">
								Welcome
							</h2>
							<h2 id="userName">{check ? null : userName}</h2>

							<h3 id="home-message">
								We are <span className="text-primary">MERN</span> Developer
							</h3>

							{userName ? null : (
								<div id="home-link">
									<NavLink
										to="../login"
										id="home-navlink"
										className="hover-link"
									>
										<span>Log In</span>
									</NavLink>
								</div>
							)}
						</div>

						<div
							className="col-lg-6 d-none d-lg-flex "
							id="home-second-container"
						>
							<img src={homePic} alt="homePic" className="img-fluid" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Homepage;
