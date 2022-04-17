/*
 * File: index.js
 * Project: client
 * Description :
 * Author: MD.Tangilur Rahman
 * File Created: Monday, 4th April 2022 9:35:53 pm
 * Last Modified: Wednesday, 6th April 2022 11:30:31 am
 */

// dependencies
import React from "react";
import ReactDOM from "react-dom/client";

import Store from "./Store";
import { Provider } from "react-redux";

// import CSS
import "./App";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={Store}>
		<App />
	</Provider>
);
