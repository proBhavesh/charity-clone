import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";

const Testnew = () => {
	return (
		<div>
			<div className="TestiSection">
    <div className="TestiTop">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="TestiText">
              <h2>WHAT KIDS ARE SAYING ABOUT US</h2>
              <div className="BorderBlock"><img src="./alsafakw.org _ Home Page_files/drop.jpg" alt /> <span /></div>
              <p />
              <p>OUR PRIME PURPOSE IN THIS LIFE IS TO HELP PEOPLE. AND IF YOU CAN'T HELP THEM AT LEAST DON'T HURT THEM.</p>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="TestiBottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <div class="TestiText">
                  <h2> Testimonials </h2>
                  </div> */}
            <div className="TestiMain">
              <h2> TESTIMONIALS </h2>
              <div className="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval={3000}>
                {/* Carousel indicators */}
                <ol className="carousel-indicators">
                  <li className="active" data-target="#fade-quote-carousel" data-slide-to={0} />
                  <li data-target="#fade-quote-carousel" data-slide-to={1} />
                </ol>
                {/* Carousel items */}
                <div className="carousel-inner">
                  <div className="item active">
                    <blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi. Ut a tincidunt sem, nec lobortis lorem. Sed a orci auctor odio blandit convallis vel quis leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit Nullam sed Elit.</p>
                      <h4>JOHNATHAN DOE, WPLOOK STUDIO  WPLOOK STUDIO</h4>
                      <div className="BorderBlock"><span /></div>
                    </blockquote>
                  </div>
                  <div className="item ">
                    <blockquote>
                      <p>tstelkhtdal</p>
                      <h4>EN_Test</h4>
                      <div className="BorderBlock"><span /></div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
		</div>
	)
}

export default Testnew