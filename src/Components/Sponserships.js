import React from "react";
import Cards from "./Cards";
import sp from "../Assets/sp.jpg"
const Voulnteers = () => {
	return (
		<>
			<div className="container my-4">
				{/*Carousel Wrapper*/}
				<div className="d-flex justify-content-center">
					<h1>Sponserships</h1>
				</div>
				<div
					id="multi-item-example"
					className="carousel slide carousel-multi-item"
					data-ride="carousel"
				>
					{/*Controls*/}
					<div className="controls-top d-flex justify-content-center">
						<a
							className="btn-floating"
							href="#multi-item-example"
							data-slide="prev"
						>
							<i className="fas fa-chevron-left m-2" />
						</a>
						<a
							className="btn-floating"
							href="#multi-item-example"
							data-slide="next"
						>
							<i className="fas fa-chevron-right m-2" />
						</a>
					</div>
					{/*/.Controls*/}
					{/*Indicators*/}
					<ol className="carousel-indicators">
						<li
							data-target="#multi-item-example"
							data-slide-to={0}
							className="active"
						/>
						<li
							data-target="#multi-item-example"
							data-slide-to={1}
						/>
					</ol>
					{/*/.Indicators*/}
					{/*Slides*/}
					<div className="carousel-inner" role="listbox">
						{/*First slide*/}
						<div className="carousel-item active d-flex flex-wrap justify-content-center ">
							<div
								className="col-md-3 mx-3"
								style={{ float: "left" }}
							>
								<div className="card mb-2 ">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<div className="d-flex justify-content-around">
											<a className="btn btn-primary">
												Button
											</a>
											<a className="btn btn-primary">
												Button
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-md-3 mx-3"
								style={{ float: "left" }}
							>
								<div className="card mb-2">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<div className="d-flex justify-content-around">
											<a className="btn btn-primary">
												Button
											</a>
											<a className="btn btn-primary">
												Button
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-md-3 mx-3"
								style={{ float: "left" }}
							>
								<div className="card mb-2">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<div className="d-flex justify-content-around">
											<a className="btn btn-primary">
												Button
											</a>
											<a className="btn btn-primary">
												Button
											</a>
										</div>
									</div>
								</div>
							</div>
							{/*<div className="col-md-3" style={{ float: "left" }}>
								<div className="card mb-2">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<a className="btn btn-primary">
											Button
										</a>
									</div>
								</div>
							</div>
*/}{" "}
						</div>
						{/*/.First slide*/}
						{/*Second slide*/}
						<div className="carousel-item">
							<div className="col-md-3" style={{ float: "left" }}>
								<div className="card mb-2">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<div className="d-flex justify-content-around">
											<a className="btn btn-primary">
												Button
											</a>
											<a className="btn btn-primary">
												Button
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-3" style={{ float: "left" }}>
								<div className="card mb-2">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<div className="d-flex justify-content-around">
											<a className="btn btn-primary">
												Button
											</a>
											<a className="btn btn-primary">
												Button
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-3" style={{ float: "left" }}>
								<div className="card mb-2">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<div className="d-flex justify-content-around">
											<a className="btn btn-primary">
												Button
											</a>
											<a className="btn btn-primary">
												Button
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-3" style={{ float: "left" }}>
								<div className="card mb-2">
									<img
										className="card-img-top"
										src={sp}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Card title
										</h4>
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the card's content.
										</p>
										<div className="d-flex justify-content-around">
											<a className="btn btn-primary">
												Button
											</a>
											<a className="btn btn-primary">
												Button
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*/.Second slide*/}
					</div>
					{/*/.Slides*/}
				</div>
				{/*/.Carousel Wrapper*/}
			</div>
		</>
	);
};

export default Voulnteers;
