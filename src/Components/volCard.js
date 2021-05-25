import React from "react";
import styles from "../Assets/volStyle.module.css";
import VolImg1 from "../Assets/VolImg1.jpg";
const volCard = () => {
	return (
		<>
			<div style={{ margin: "2rem" }}>
				<div
					className="card d-flex flex-row"
					style={{ width: "36rem" }}
				>
					<img
						src={VolImg1}
						className="card-img-top"
						alt="..."
						style={{ width: "18rem" }}
					/>
					<div
						className={`card-body volHover ${styles.volHover}`}
						style={{ width: "18rem" }}
					>
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default volCard;
