// fontawesome icon
import {
	faMapLocationDot,
	faMobileRetro,
	faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

// react-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import css
import "./Contract.css";

// own component
import ContractComponent from "./ContractComponent";

const Contract = (props) => {
	const { name, email, address, phone } = props.user;

	// ContractComponent's variable
	const sendPhone = `tel:${phone}`;
	const sendEmail = `mailto:${email}`;

	const phoneElement = <a href={sendPhone}>{phone}</a>;
	const emailElement = <a href={sendEmail}>Send Email</a>;
	const addressElement = <p>{address}</p>;

	// For Get text-area field's Data
	const [message, setMessage] = useState("");

	const onChangeHandler = (event) => {
		setMessage(event.target.value);
	};

	const submitHandle = async (event) => {
		event.preventDefault();

		const response = await fetch("/contract", {
			method: "PUT",
			body: JSON.stringify({ message }),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const result = await response.json();

		if (response.status === 200) {
			toast.success(result.message, {
				position: "top-center",
				theme: "colored"
			});

			setMessage("");
		} else {
			toast.warn(result.error, {
				position: "top-center",
				theme: "colored"
			});
		}
	};

	return (
		<div className="container-fluid">
			{/* first section start */}
			<div className="row justify-content-center" id="con-row-1">
				<ContractComponent
					icon={faMobileRetro}
					item="Phone"
					element={phoneElement}
				/>

				<ContractComponent
					icon={faPaperPlane}
					item="Email"
					element={emailElement}
				/>

				<ContractComponent
					icon={faMapLocationDot}
					item="Address"
					element={addressElement}
				/>
			</div>
			{/* first section start */}

			{/* second section start */}
			<div className="container-fluid shadow p-4 p-lg-5 mb-4 mb-lg-5 rounded con-second-container">
				<form method="PUT" encType="application/x-www-form-urlencoded">
					<div className="row con-second-row">
						<h3 id="con-header">Send FeedBack</h3>

						<div className="col-lg-4 d-flex">
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Your Name..."
								className="con-input"
								value={name}
								readOnly
							/>
						</div>

						<div className="col-lg-4 d-flex">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Your Email..."
								className="con-input"
								value={email}
								readOnly
							/>
						</div>

						<div className="col-lg-4 d-flex">
							<input
								type="phone"
								name="phone"
								id="phone"
								placeholder="Mobile Number..."
								className="con-input"
								value={phone}
								readOnly
							/>
						</div>

						<div className="col-12">
							<textarea
								name="message"
								id="message"
								placeholder="Comment..."
								onChange={onChangeHandler}
								value={message}
							></textarea>
						</div>
					</div>

					<button type="submit" onClick={submitHandle}>
						Send
					</button>
				</form>
			</div>

			<ToastContainer />
		</div>
	);
};

export default Contract;
