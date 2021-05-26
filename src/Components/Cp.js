import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
import cpImg from "../Assets/cpimg.jpg";
const Cp = () => {
	return (
		<div>
			<div className="CharitableSec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            {/* <h2>CHARITABLE PROJECTS</h2>
                  <div class="BorderBlock"><img src={cpImg}rop.jpg" /> <span></span></div>
                  <p>INTEGER AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA NOSTRA.</p> */}
            <h2>CHARITABLE PROJECTS</h2>
            <div className="BorderBlock"><img src={cpImg} alt /><span /></div>
            <p><span>Do good forever, and be exposed to the whiffs of God’s mercy. For God has blows of His mercy, with which He afflicts whomever He wills among His servants. ”(Sahih Hadith)“ God has servants whom He has dedicated to fulfilling people's needs, their love for good and love of goodness to them.</span></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorImg">
            <div className="slider_nav">
              <div className="slider_nav_prev slick-arrow" style={{display: 'block'}} />
              <div className="slider_nav_next slick-arrow" style={{display: 'block'}} />
            </div>
            <ul id="flexiselDemo1" className="slick-initialized slick-slider" style={{display: 'block'}}>
              <div className="slick-list draggable">
                <div className="slick-track" style={{opacity: 1, width: 12540, transform: 'translate3d(-1140px, 0px, 0px)'}}>
                  <div className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/project_checkout/project_category_detail/MzA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2012(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2012(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus12 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={545} className="count12" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus12 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={30} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="external demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '1.8%', background: '#2ab673'}}>
                                    <div className="progress-value">1.8%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>545  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2013(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2013(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus13 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={4990} className="count13" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus13 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={22} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="shewing demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 5000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0.2%', background: '#2ab673'}}>
                                    <div className="progress-value">0.2%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>5,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>4,990  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2014(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2014(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus14 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={388} className="count14" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus14 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={18} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="farm demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 888</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '56.31%', background: '#2ab673'}}>
                                    <div className="progress-value">56.31%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>888 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>500 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>388  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/Nzc" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={0}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/Nzc" tabIndex={0}>Khawaja Mosque</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/Nzc" tabIndex={0}>Khawaja Mosque</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Is the voltage provided by man to his community with his own will and in exchange for nothing...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="10" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2000(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2000(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="10" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus0 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={234} className="count0" name="amount_pay" min={1} defaultValue={10} tabIndex={0} />
                                      <span className="plus0 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={77} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="Khawaja Mosque" tabIndex={0} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={0} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={0} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 234</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>234 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>234  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NTU" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={0}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NTU" tabIndex={0}>School</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NTU" tabIndex={0}>School</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2001(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2001(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus1 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={170000} className="count1" name="amount_pay" min={1} defaultValue={50} tabIndex={0} />
                                      <span className="plus1 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={55} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="School" tabIndex={0} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={0} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={0} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 170000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>170,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>170,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NTQ" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={0}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NTQ" tabIndex={0}>Cows</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NTQ" tabIndex={0}>Cows</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>A developmental project that aims to chaste the widows and their orphans, and encourage poor...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="20" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2002(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2002(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="20" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus2 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={500} className="count2" name="amount_pay" min={1} defaultValue={20} tabIndex={0} />
                                      <span className="plus2 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={54} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="Cows" tabIndex={0} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={0} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={0} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 500</h4> */}
                                <div className="progress blue Hide">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>500 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>500  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={3} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NTM" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>A development project aimed at improving the standard of living for widows and their orphans...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2003(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2003(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus3 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={290} className="count3" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus3 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={53} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Sewing Machines" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 300</h4> */}
                                <div className="progress blue Hide">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>300 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>290  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDk" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>There is a need for standardized texts to assess reading performance, for multiple equivalent...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="100" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2004(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2004(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="100" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus4 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={2000} className="count4" name="amount_pay" min={1} defaultValue={100} tabIndex={-1} />
                                      <span className="plus4 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={49} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Building school in Indonesia" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 3500</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '42.86%', background: '#2ab673'}}>
                                    <div className="progress-value">42.86%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>3,500 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>1,500 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>2,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={5} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>There is a need for standardized texts to assess reading performance, for multiple equivalent...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2005(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2005(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus5 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={20000} className="count5" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus5 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={48} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Widows Sponsorship" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 20000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>20,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>20,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={6} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/NDc" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>It aims to feed the orphans in the orphanage, the building with an area of 90 square meters...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2006(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2006(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus6 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={11710} className="count6" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus6 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={47} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Bakery and coffee shop for orphanage" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 12000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '2.42%', background: '#2ab673'}}>
                                    <div className="progress-value">2.42%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>12,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>290 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>11,710  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={7} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>There is a need for standardized texts to assess reading performance, for multiple equivalent...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2007(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2007(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus7 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={15000} className="count7" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus7 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={44} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Continous Benefits" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 15000</h4> */}
                                <div className="progress blue Hide">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>15,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={8} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2008(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2008(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus8 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={11435} className="count8" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus8 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Building Mosques 10x12 mts" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 11500</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0.57%', background: '#2ab673'}}>
                                    <div className="progress-value">0.57%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>11,500 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>65 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>11,435  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={9} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzY" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2009(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2009(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus9 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={555} className="count9" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus9 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={36} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="school demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>555  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={10} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2010(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2010(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus10 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={555} className="count10" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus10 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={34} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="sacrificial demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>555  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={11} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2011(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2011(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus11 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={545} className="count11" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus11 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={31} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="indoor demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '1.8%', background: '#2ab673'}}>
                                    <div className="progress-value">1.8%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>545  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={12} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2012(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2012(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus12 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={545} className="count12" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus12 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={30} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="external demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '1.8%', background: '#2ab673'}}>
                                    <div className="progress-value">1.8%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>545  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={13} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2013(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2013(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus13 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={4990} className="count13" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus13 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={22} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="shewing demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 5000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0.2%', background: '#2ab673'}}>
                                    <div className="progress-value">0.2%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>5,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>4,990  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={14} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2014(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2014(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus14 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={388} className="count14" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus14 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={18} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="farm demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 888</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '56.31%', background: '#2ab673'}}>
                                    <div className="progress-value">56.31%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>888 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>500 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>388  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={15} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/Nzc" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/Nzc" tabIndex={-1}>Khawaja Mosque</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/Nzc" tabIndex={-1}>Khawaja Mosque</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Is the voltage provided by man to his community with his own will and in exchange for nothing...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="10" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2000(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2000(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="10" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus0 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={234} className="count0" name="amount_pay" min={1} defaultValue={10} tabIndex={-1} />
                                      <span className="plus0 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={77} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Khawaja Mosque" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 234</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>234 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>234  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={16} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NTU" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NTU" tabIndex={-1}>School</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NTU" tabIndex={-1}>School</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2001(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2001(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus1 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={170000} className="count1" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus1 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={55} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="School" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 170000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>170,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>170,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={17} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NTQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NTQ" tabIndex={-1}>Cows</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NTQ" tabIndex={-1}>Cows</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>A developmental project that aims to chaste the widows and their orphans, and encourage poor...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="20" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2002(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2002(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="20" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus2 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={500} className="count2" name="amount_pay" min={1} defaultValue={20} tabIndex={-1} />
                                      <span className="plus2 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={54} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Cows" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 500</h4> */}
                                <div className="progress blue Hide">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>500 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>500  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={18} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NTM" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>A development project aimed at improving the standard of living for widows and their orphans...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2003(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2003(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus3 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={290} className="count3" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus3 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={53} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Sewing Machines" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 300</h4> */}
                                <div className="progress blue Hide">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>300 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>290  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={19} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDk" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>There is a need for standardized texts to assess reading performance, for multiple equivalent...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="100" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2004(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2004(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="100" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus4 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={2000} className="count4" name="amount_pay" min={1} defaultValue={100} tabIndex={-1} />
                                      <span className="plus4 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={49} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Building school in Indonesia" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 3500</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '42.86%', background: '#2ab673'}}>
                                    <div className="progress-value">42.86%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>3,500 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>1,500 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>2,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={20} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>There is a need for standardized texts to assess reading performance, for multiple equivalent...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2005(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2005(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus5 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={20000} className="count5" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus5 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={48} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Widows Sponsorship" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 20000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>20,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>20,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={21} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/NDc" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>It aims to feed the orphans in the orphanage, the building with an area of 90 square meters...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2006(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2006(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus6 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={11710} className="count6" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus6 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={47} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Bakery and coffee shop for orphanage" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 12000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '2.42%', background: '#2ab673'}}>
                                    <div className="progress-value">2.42%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>12,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>290 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>11,710  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={22} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>There is a need for standardized texts to assess reading performance, for multiple equivalent...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2007(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2007(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus7 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={15000} className="count7" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus7 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={44} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Continous Benefits" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 15000</h4> */}
                                <div className="progress blue Hide">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>15,000  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={23} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="project_checkout/project_category_detail/NDE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2008(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2008(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus8 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={11435} className="count8" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus8 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                                <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                                <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                                <input type="hidden" name="id" defaultValue={41} tabIndex={-1} />
                                <input type="hidden" name="project_name" defaultValue="Building Mosques 10x12 mts" tabIndex={-1} />
                                <div style={{clear: 'both'}} >
                                  <div className="BtnSec">
                                    <ul>
                                      <li>
                                        <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                      </li>
                                      {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                      <li>
                                        {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                        <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <h4>KD 11500</h4> */}
                                  <div className="progress blue">
                                    <div className="progress-bar" style={{width: '0.57%', background: '#2ab673'}}>
                                      <div className="progress-value">0.57%</div>
                                    </div>
                                  </div>
                                  {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                  <h5>
                                    <span><small>TARGET</small> <strong>11,500 KD </strong></span>
                                    <span><small>FUNDED</small> <strong>65 KD </strong></span> 
                                    <span className="Last"><small>REMAINING</small> <strong>11,435  KD</strong></span> 
                                  </h5>
                                </div>
                              </div></form>
                          </div>
                        </div></li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={24} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzY" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2009(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2009(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus9 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={555} className="count9" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus9 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={36} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="school demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>555  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={25} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2010(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2010(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus10 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={555} className="count10" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus10 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={34} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="sacrificial demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>0 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>555  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={26} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2011(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2011(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus11 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={545} className="count11" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus11 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={31} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="indoor demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '1.8%', background: '#2ab673'}}>
                                    <div className="progress-value">1.8%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>545  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={27} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2012(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2012(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus12 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={545} className="count12" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus12 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={30} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="external demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 555</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '1.8%', background: '#2ab673'}}>
                                    <div className="progress-value">1.8%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>555 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>545  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={28} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2013(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2013(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                    {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                    <div className="qty">
                                      <span className="minus13 bg-dark"><i className="fa fa-minus" /></span>
                                      <input type="number" max={4990} className="count13" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plus13 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={22} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="shewing demo" tabIndex={-1} />
                              <div style={{clear: 'both'}} >
                                <div className="BtnSec">
                                  <ul>
                                    <li>
                                      <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                    </li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                    <li>
                                      {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                      <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                    </li>
                                  </ul>
                                </div>
                                {/* <h4>KD 5000</h4> */}
                                <div className="progress blue">
                                  <div className="progress-bar" style={{width: '0.2%', background: '#2ab673'}}>
                                    <div className="progress-value">0.2%</div>
                                  </div>
                                </div>
                                {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                                <h5>
                                  <span><small>TARGET</small> <strong>5,000 KD </strong></span>
                                  <span><small>FUNDED</small> <strong>10 KD </strong></span> 
                                  <span className="Last"><small>REMAINING</small> <strong>4,990  KD</strong></span> 
                                </h5>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={29} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={cpImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                              </div>
                            </div>
                            <div className="form-group">
                              <ul>
                                <li><small>Enter your donation</small></li>
                                <li className="DonationBtn">
                                  {/*<input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onclick="this.value = rrdtxfferefdff2014(this.value, 0, 10000000000000000)" onkeyup="this.value = rrdtxfferefdff2014(this.value, 0, 10000000000000000)" class="form-control" />*/}
                                  {/* <input type="number"  value="50" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay"  class="form-control" /> */}
                                  <div className="qty">
                                    <span className="minus14 bg-dark"><i className="fa fa-minus" /></span>
                                    <input type="number" max={388} className="count14" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                    <span className="plus14 bg-dark"><i className="fa fa-plus" /> </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <input type="hidden" name="main_categoary_id" defaultValue tabIndex={-1} />
                            <input type="hidden" name="sub_category_id" defaultValue tabIndex={-1} />
                            <input type="hidden" name="id" defaultValue={18} tabIndex={-1} />
                            <input type="hidden" name="project_name" defaultValue="farm demo" tabIndex={-1} />
                            <div style={{clear: 'both'}} >
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" defaultValue="ONE CLICK CHECKOUT" name="one_click" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                              {/* <h4>KD 888</h4> */}
                              <div className="progress blue">
                                <div className="progress-bar" style={{width: '56.31%', background: '#2ab673'}}>
                                  <div className="progress-value">56.31%</div>
                                </div>
                              </div>
                              {/* <img class="borderImg" src={cpImg}order.jpg" /> */}
                              <h5>
                                <span><small>TARGET</small> <strong>888 KD </strong></span>
                                <span><small>FUNDED</small> <strong>500 KD </strong></span> 
                                <span className="Last"><small>REMAINING</small> <strong>388  KD</strong></span> 
                              </h5>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
		</div>
	)
}

export default Cp