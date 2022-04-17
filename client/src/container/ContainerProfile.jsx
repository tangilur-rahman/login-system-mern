import Profile from "../components/Profile/Profile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";

//react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContainerProfile = () => {

	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState();

	// For Redirect "/login" 
	const Navigate = useNavigate();

	const verifyUser = async () => {
		const response = await fetch("/profile");

		const result = await response.json();

		setLoading(false);
		setUser(result);

		if (response.status >= 400) {
			setTimeout(() => {
				toast.warn("Plz LogIn First 😡", {
					position: "top-center",
					theme: "colored",
					autoClose: 2000
				});
			}, 500);

			return Navigate("../login");
		}
	};

	useEffect(() => {
		verifyUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{loading ? <Loading /> : <Profile user={user} />}
			<ToastContainer />{" "}
		</>
	);
};

export default ContainerProfile;
