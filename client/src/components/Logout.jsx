import { useEffect } from "react";
import { useDispatch } from "react-redux";
// for call Action Creator
import { useNavigate } from "react-router-dom";
// react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logOutActionCreator } from "../service/Action/Action";


const Logout = () => {
	// For Redirect "/home"
	const Navigate = useNavigate();

	const dispatch = useDispatch();

	const logoutHandler = async () => {
		const response = await fetch("/logout");

		const result = await response.json();

		if (response.status === 200) {
			toast.success(result.message, {
				position: "top-center",
				theme: "colored",
				autoClose: 1000
			});
			setTimeout(() => {
				dispatch(logOutActionCreator());
				return Navigate("/");
			}, 2000);
		} else {
			toast.error(result.error, {
				position: "top-center",
				theme: "colored"
			});
		}
	};

	useEffect(() => {
		logoutHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ToastContainer />
		</>
	);
};

export default Logout;
