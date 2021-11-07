import React, { useState } from "react";

//create your first component
const Home = () => {
	const [illuminateS, setIlluminateS] = useState([false, false, false]);
	return (
		<>
			<div className="box">
				<div className="stick"></div>
				<div className="traffic-light">
					<div
						className={`light red-light ${
							illuminateS[0] ? "illuminate" : null
						}`}
						onClick={() =>
							setIlluminateS([true, false, false])
						}></div>

					<div
						className={`light yellow-light ${
							illuminateS[1] ? "illuminate" : null
						}`}
						onClick={() =>
							setIlluminateS([false, true, false])
						}></div>

					<div
						className={`light green-light ${
							illuminateS[2] ? "illuminate" : null
						}`}
						onClick={() =>
							setIlluminateS([false, false, true])
						}></div>
				</div>
			</div>
		</>
	);
};

export default Home;
