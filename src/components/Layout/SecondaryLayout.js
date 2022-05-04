import React from "react";
import Header from "./components/Header";

function SecondaryLayout({ children }) {
	return (
		<>
			<Header />
			<div className="container">
				<div className="content">{children}</div>
			</div>
		</>
	);
}

export default SecondaryLayout;
