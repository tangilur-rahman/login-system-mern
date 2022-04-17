// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import CSS
import "./App.css";

// import common components
import ContainerNavbar from "./container/ContainerNavbar";

// import pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import Logout from "./components/Logout";
import ContractPage from "./pages/ContractPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
	
	return (
		<>
			<BrowserRouter>
				{/* Header */}
				<ContainerNavbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="profile" element={<ProfilePage />} />
					<Route path="contract" element={<ContractPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignupPage />} />
					<Route path="logout" element={<Logout />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
