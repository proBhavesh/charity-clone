import React from "react";
import c1 from "../Assets/c1.jpg";
import c2 from "../Assets/c2.jpg";
import c3 from "../Assets/c3.jpg";
import "./carousel.module.css";
const Carousel = () => {
	const carSt = {
		height: "70vh",
		objectFit: "cover",
	};
	return (
		<div>
			<div>
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to={0}
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to={1}
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to={2}
							aria-label="Slide 3"
						/>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								style={carSt}
								src={c1}
								className="d-block w-100 "
								alt="..."
							/>
							<div class="carousel-caption d-none d-md-block">
								<div>
									<div className="card text-center bg-success">
										<div className="card-header">
											Featured
										</div>
										<div className="card-body">
											<h1 className="card-title">
												Special title treatment
											</h1>
											<p className="card-text">
												With supporting text below as a
												natural lead-in to additional
												content.
											</p>
											<a
												href="#"
												className="btn btn-primary"
											>
												Button
											</a>
										</div>
										<div className="card-footer text-muted">
											2 days ago
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img
								style={carSt}
								src={c2}
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								style={carSt}
								src={c3}
								className="d-block w-100"
								alt="..."
							/>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
