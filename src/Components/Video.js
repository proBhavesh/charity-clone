import React from "react";

const Video = () => {
	return (
		<div className="d-flex justify-content-center w-75 m-auto flex-wrap">
			<div>
				<iframe
					width="420"
					height="300"
					src="https://www.youtube.com/embed/tgbNymZ7vqY"
				></iframe>
			</div>
			<div className="card w-50">
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<button type="button" className="btn btn-primary">
						Button
					</button>
				</div>
			</div>
		</div>
	);
};

export default Video;
