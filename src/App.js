import React from "react";
// import "./Styles/style.css";
// import "./Styles/slick.css";
// import "./Styles/alsafakw_custom.css";
// import "./Styles/flexslider.css";
import Navbar from "./Components/Navbar.js";
import Carousel from "./Components/Carousel.js";
import Footer from "./Components/Footer.js";
import Testimonials from "./Components/Testimonials.js";
import Voulnteers from "./Components/Voulnteers.js";
import Zakat from "./Components/Zakat.js";
import OneTimeDonate from "./Components/OneTimeDonate.js";
import Sponserships from "./Components/Sponserships.js";
import Video from "./Components/Video.js";
const App = () => {
	return (
		<>
			<Navbar />
			<Carousel />
			<Sponserships />
			<OneTimeDonate />
			<Zakat />
			<Video/>
			<Voulnteers />
			<Testimonials />
			<Footer />
		</>
	);
};

export default App;
