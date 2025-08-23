import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import LoadingProvider from "./context/LoadingProvider.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root"))
        .render(
	        <React.StrictMode>
		        {
			        // todo wrap App with LoadingProvider to subscribe App to its context
			        <App />
		        }
	        </React.StrictMode>
        );
