import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
import NewsImg from "../Assets/news1.jpg";
const VideoSec = () => {
	return (
		<div>
			<div className="VideoSection">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="VideoMainSec">
            <div className="VideoLeft">
              <iframe src={NewsImg} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="VideoRight">
              <div className="VideoText">
                <div className="VideoTextLeft">
                  <h2>GOOD DINARS</h2>
                  <p>YOUR RELIGION CONTRIBUTES TO THE FLOLLOWING PROJECTS</p>
                  <p>1. <a href="http://www.alsafakw.org/#">WIDOWS SPONSORSHIP LISTING</a></p>
                  <p>2. <a href="http://www.alsafakw.org/#">STUDENT'S SPONSORSHIP DEMO</a></p>
                  <p>3. <a href="http://www.alsafakw.org/#">CONTSTRUCTION OF HOSPITALS</a></p>
                  <p>4. <a href="http://www.alsafakw.org/#">CONSTRUCTION OF WIDOW'S</a></p>
                  <p>5. <a href="http://www.alsafakw.org/#">DIGGING WELLS LIST</a></p>
                  <p><a className="btn btn-default" href="https://alsafakw.org/pay_donation/donation">Donate Now</a></p>
                  {/*<div class="BorderBlock"><span></span></div>
                           <p>YOUR RELIGION CONTRIBUTES TO THE FLOLLOWING PROJECTS</p>
                           <ul>
                           	<li>1. WIDOWS SPONSORSHIP</li>
                           	<li>2. STUDENT'S SPONSORSHIP</li>
                           	<li>3. CONTSTRUCTION OF HOSPITALS</li>
                           	<li>4. CONSTRUCTION OF WIDOW'S HOMES</li>
                           	<li>5. DIGGING WELLS</li>
                           	<a href="#" class="btn btn-default">Donate Now</a>
                           </ul>
                           </div>*/}
                </div>
                <div className="VideoTextRight">
                  <img src={NewsImg} alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="NewsSection">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="NewsLeft">
            <div className="NewsHead">
              <h2>ALSAFA IN THE NEWS</h2>
              <div className="BorderBlock"><span /></div>
            </div>
            <div className="controls testimonial_control pull-right">
              <a className="left" href="http://www.alsafakw.org/#fade-quote-carousel" data-slide="prev"><i className="fa fa-angle-left" /></a>
              <a className="right" href="http://www.alsafakw.org/#fade-quote-carousel" data-slide="next"><i className="fa fa-angle-right" /></a>
            </div>
            <div className="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval={3000}>
              <div className="carousel-inner">
                <div className="item active ">
                  <div className="profile-circle">
                    <a href="http://www.alsafakw.org/news_detail/index/MQ"><img src={NewsImg} alt /></a>
                  </div>
                  <blockquote>
                    <h3><a href="http://www.alsafakw.org/news_detail/index/MQ">ORGANIZED FOOD CAMP FOR CHILDREN </a></h3>
                    <p>Jul 07 , 2018</p>
                    <p />
                    <p>We are here through the Al-Safa Humanita....</p>
                    {/*<p>We are here through the Al-Safa Humanitarian Charity Association extending to you hands until you enjoy the pleasure of giving your brother.</p>*/}
                    <a href="http://www.alsafakw.org/news_detail/index/MQ" className="btn btn-default">Read More</a>
                  </blockquote>
                </div>
                <div className="item ">
                  <div className="profile-circle">
                    <a href="http://www.alsafakw.org/news_detail/index/Mg"><img src={NewsImg} alt /></a>
                  </div>
                  <blockquote>
                    <h3><a href="http://www.alsafakw.org/news_detail/index/Mg">ORGANIZED FOOD CAMP FOR CHILDREN </a></h3>
                    <p>May 06 , 2019</p>
                    <p />
                    <p>We are here through the Al-Safa Humanita....</p>
                    {/*<p>We are here through the Al-Safa Humanitarian Charity Association extending to you hands until you enjoy the pleasure of giving your brother.</p>*/}
                    <a href="http://www.alsafakw.org/news_detail/index/Mg" className="btn btn-default">Read More</a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="NewsRight">
            <h2>LATEST NEWS</h2>
            <div className="BorderBlock"><span /></div>
            <div className="Add">
              <div className="scroll">
                <div className="ScrollBlock">
                  <ul>
                    <li>
                      <a href="http://www.alsafakw.org/news_detail/news_details_latest/Mg"><img src={NewsImg} alt /></a>
                      <div className="NewsText">
                        <h3><a href="http://www.alsafakw.org/news_detail/news_details_latest/Mg">ORGANIZED FOOD CAMP FOR CHILDREN</a></h3>
                        <p>May 06 , 2019</p>
                      </div>
                    </li>
                    <li>
                      <a href="http://www.alsafakw.org/news_detail/news_details_latest/MQ"><img src={NewsImg} alt /></a>
                      <div className="NewsText">
                        <h3><a href="http://www.alsafakw.org/news_detail/news_details_latest/MQ">ORGANIZED FOOD CAMP FOR CHILDREN</a></h3>
                        <p>Jul 07 , 2018</p>
                      </div>
                    </li>
                  </ul>
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

export default VideoSec