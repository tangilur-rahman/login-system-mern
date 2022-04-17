import "./Loading.css";
const Loading = () => {
	return (
		<>
			<div className="lds-roller" id="loading-container">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</>
	);
};

export default Loading;
