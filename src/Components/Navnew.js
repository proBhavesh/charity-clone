import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";

const Navnew = () => {
	return (
		<div>
			 <footer>
    <div className="FootTop">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="FootBlock">
              <h4>ABOUT CHARITY</h4>
              <div className="BorderBlock"><span /></div>
              <p>Charity vitae diam pulvinar, tempus dia aliquam tellus. Quisque mattis odio eu placerat luctus. Vivamus magna elit, ultrices non lacinia vel, tempor vitae tell Fusce sit amet.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="FootBlock LinkSec">
              <h4>QUICK LINKS</h4>
              <div className="BorderBlock"><span /></div>
              <ul>
                <li><a href="http://www.alsafakw.org/">HOME</a></li>
                <li><a href="http://www.alsafakw.org/about_us">ABOUT US</a></li>
                <li><a href="http://www.alsafakw.org/charity_category/charity_category/Mg">Projects</a></li>
                <li><a href="http://www.alsafakw.org/charity_category/charity_category/MQ">Zakat</a></li>
                <li><a href="http://www.alsafakw.org/charity_category/charity_category/Mw">Endowment</a></li>
                {/* <li><a href="http://www.alsafakw.org/urgent">URGENT</a></li> */}
                <li><a href="http://www.alsafakw.org/sponsorship_category">Sponsorship</a></li>
                <li><a href="http://www.alsafakw.org/zakat_calculator">ZAKAT CALCULATOR</a></li>
                <li><a href="http://www.alsafakw.org/pay_donation/pay_your_zakat">PAY ZAKAT</a></li>
                <li><a href="http://www.alsafakw.org/campaigns_cat">CAMPAIGN</a></li>
                <li><a href="http://www.alsafakw.org/welcome/wiretransfer">WIRE TRANSFER</a></li>
                {/* <li><a href="http://www.alsafakw.org/charity_basket">CHARITY BASKET</a></li> */}
                <li><a href="http://www.alsafakw.org/contact_us">CONTACT US</a></li>
                <li><a href="http://www.alsafakw.org/terms_condition">TERMS OF USE</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="FootBlock" id="newsrefresh">
              <h4>NEWSLETTER SIGNUP</h4>
              <div className="BorderBlock"><span /></div>
              <p>Join our newsletter, enter your email address, and click "GO"</p>
              <form method="post">
                <div className="form-group">
                  <span className="err" id="emailerr2" style={{color: 'red'}} />
                  <span className="err" id="emailerr2s" style={{color: 'red'}} />
                  <input type="text" name="email" id="emailid2" className="form-control" placeholder="Enter Your Email" />
                  <input type="button" name="newsletter" className="btn btn-default" defaultValue="SIGNUP" onclick="return validation_newsletter2()" />
                </div>
                <span id="massegeerr_suc" style={{color: 'green'}} />
              </form>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="FootBlock Add">
              <p>Address:<br />
                Al-Siddeeq, Block 7, Street 712, Building 301<br />
                P.O. BOX 562 Al Zahra 47456 State of Kuwait
              </p>
              <ul>
                <li>
                  <span>Office - +96522233322<br />
                    Office - +96597658888</span>
                </li>
                <li className="Email">
                  <span><a href="mailto:info@alsafakw.org">Email: info@alsafakw.org</a></span>
                </li>
              </ul>
            </div>
          </div>
          {/*<div class="col-md-3 col-sm-12">
               <div class="FootBlock Add">
               	<p>Address: Al Rawda, Block 5, Street 57, Plot 127, House 22 Kuwait</p>
               	<ul>
               		<li><i class="fa fa-phone"></i> <span>+96522233322</span></li>
               		<li><i class="fa fa-phone"></i> <span>+96597658888</span></li>
               		<li class="Email"><i class="fa fa-envelope-o"></i> <span>alsafacharitykw@gmail.com</span></li>
               		<li class="Email"><i class="fa fa-envelope-o"></i> <span>alsafakw@hotmail.com</span></li>
               	</ul>
               </div>
               </div>*/}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="WhatsappIcon">
              <div className="WhatsIcon">
                <a target="_blank" href="https://api.whatsapp.com/sendphone=+96597658888">
                  <i className="fa fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="FootBottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>Copyright 2021. All Rights Reserved by Alsafakw Organisation</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="SocialSec">
              <ul>
                <li><a target="_blank" href="https://api.whatsapp.com/sendphone=+96597658888">
                    <i className="fa fa-whatsapp" />
                    <span> Reach me on Whatsapp</span> 
                  </a>
                </li>
                <li><a target="_blank" href="https://www.facebook.com/alsafakw"><i className="fa fa-facebook" /></a></li>
                <li><a target="_blank" href="https://twitter.com/alsafakw"><i className="fa fa-twitter" /></a></li>
                <li><a target="_blank" href="https://instagram.com/alsafakw"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
		</div>
	)
}

export default Navnew