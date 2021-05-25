import React from "react";
// import "./Styles/style.css";
// import "./Styles/slick.css";
// import "./Styles/alsafakw_custom.css";
// import "./Styles/flexslider.css";
import Navbar from "./Components/Navbar.js";
import Banner from "./Components/Banner.js";
import Navnew from "./Components/Navnew.js";
import Testnew from "./Components/Testnew.js";
import Volnew from "./Components/Volnew.js";
import Charitable from "./Components/Charitable.js";
import Cp from "./Components/Cp.js";
import Endowment from "./Components/Endowment.js";
import Zakat1 from "./Components/Zakat1.js";
import OneTimeDonate from "./Components/OneTimeDonate.js";
import Sponserships from "./Components/Sponserships.js";
import VideoSec from "./Components/VideoSec.js";
import volCard from "./Components/volCard.js";
const App = () => {
	return (
		<>
			<Navbar />
			<Banner />
			{/*<Sponserships />
			<OneTimeDonate />
			<Zakat />*/}
			{/*<Video />*/}
			<Charitable />
			<Cp />
			<Endowment />
			<Zakat1/>
			<VideoSec/>
			<Volnew/>
			<Testnew/>
			{/*<Testimonials />*/}
			<Navnew />
		</>
	);
};

export default App;
