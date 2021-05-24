import React from "react";
// import "./Styles/style.css";
// import "./Styles/slick.css";
// import "./Styles/alsafakw_custom.css";
// import "./Styles/flexslider.css";
import Navbar from "./Components/Navbar.js";
import Carousel from "./Components/Carousel.js";
import Footer from "./Components/Footer.js";
import Testimonials from "./Components/Testimonials.js";
const App = () => {
	return (
		<>
			<Navbar />
			<Carousel />
			<Testimonials />
			<Footer />
		</>
	);
};

export default App;
