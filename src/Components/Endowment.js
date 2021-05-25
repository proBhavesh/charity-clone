import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
import EndowmentImg from "../Assets/endow.jpg";
const Endowment = () => {
	return (
		<div>
			<div className="SectionNew1 EndowmentSection">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            {/* <h2>CHARITABLE PROJECTS</h2>
                  <div class="BorderBlock"><img src={EndowmentImg}rop.jpg" /> <span></span></div>
                  <p>INTEGER AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA NOSTRA.</p> */}
            <h2>ENDOWMENT</h2>
            <div className="BorderBlock"><img src={EndowmentImg} alt /><span /></div>
            <p><span>He, may God bless him and grant him peace, said: (If you wish, you locked up its original, and gave charity to it, he said: Then Omar gave it in charity, that its original is not sold, bought, or inherited, and it is not given. A suite that the one who has a guardian has to eat from it on a favor or to feed an unaffected friend</span></p>
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
            <ul id="flexiselDemo5" className="slick-initialized slick-slider" style={{display: 'block'}}>
              <div className="slick-list draggable">
                <div className="slick-track" style={{opacity: 1, width: 7980, transform: 'translate3d(-1140px, 0px, 0px)'}}>
                  <div className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>Provision of water</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>Provision of water</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq5 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={15000} type="number" className="countq5" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq5 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1206(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={5} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Provision of water" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>15,000 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>AlSafa endowment XYZ</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>AlSafa endowment XYZ</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq2 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={2500} type="number" className="countq2" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq2 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1207(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={2} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="AlSafa endowment XYZ" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '16.67%', background: '#2ab673'}}>
                                <div className="progress-value">16.67%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>3,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>500  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>2,500 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>Endo Project</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>Endo Project</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq1 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={99} type="number" className="countq1" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq1 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1208(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={39} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={39} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={1} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Endo Project" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '50.5%', background: '#2ab673'}}>
                                <div className="progress-value">50.5%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>200 KD </strong></span>
                              <span><small>FUNDED</small> <strong>101  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>99 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTU" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={0}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTU" tabIndex={0}>School Building</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTU" tabIndex={0}>School Building</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq15 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={976} type="number" className="countq15" name="amount_pay" min={1} defaultValue={1000} tabIndex={0} />
                                      <span className="plusq15 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1200(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={40} tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue={40} tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={15} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="School Building" tabIndex={0} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={0} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={0} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '51.2%', background: '#2ab673'}}>
                                <div className="progress-value">51.2%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>2,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>1,024  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>976 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTM" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={0}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTM" tabIndex={0}>A home for Orphans</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTM" tabIndex={0}>A home for Orphans</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Many are cared for by extended family members. But some children have no one, while others were...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq13 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={3000} type="number" className="countq13" name="amount_pay" min={1} defaultValue={24} tabIndex={0} />
                                      <span className="plusq13 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1201(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={40} tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue={40} tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={13} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="A home for Orphans" tabIndex={0} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={0} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={0} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>3,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>3,000 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTI" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={0}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTI" tabIndex={0}>Social Responsibility</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTI" tabIndex={0}>Social Responsibility</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Al safa plays a pivotal role in activating the principles of corporate social responsibility...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq12 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={200} type="number" className="countq12" name="amount_pay" min={1} defaultValue={20} tabIndex={0} />
                                      <span className="plusq12 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1202(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={12} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="Social Responsibility" tabIndex={0} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={0} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={0} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue Hide">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>200 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>200 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/OA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/OA" tabIndex={-1}>Charitable endowment</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/OA" tabIndex={-1}>Charitable endowment</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Suitable because of differences in word lengths between languages. However, for everyday life...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq8 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={2269900} type="number" className="countq8" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq8 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1203(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={8} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Charitable endowment" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>2,270,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>100  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>2,269,900 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Nw" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Nw" tabIndex={-1}>Seven Benefits</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Nw" tabIndex={-1}>Seven Benefits</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq7 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={20} type="number" className="countq7" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq7 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1204(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={7} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Seven Benefits" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue Hide">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>20 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>20 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Ng" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Ng" tabIndex={-1}>Righteousness to parents</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Ng" tabIndex={-1}>Righteousness to parents</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq6 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={17000} type="number" className="countq6" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq6 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1205(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={6} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Righteousness to parents" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>17,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>17,000 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>Provision of water</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>Provision of water</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq5 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={15000} type="number" className="countq5" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq5 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1206(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={5} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Provision of water" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>15,000 KD </strong></span> 
                            </h5>
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>AlSafa endowment XYZ</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>AlSafa endowment XYZ</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq2 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={2500} type="number" className="countq2" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq2 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1207(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={2} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="AlSafa endowment XYZ" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '16.67%', background: '#2ab673'}}>
                                <div className="progress-value">16.67%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>3,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>500  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>2,500 KD </strong></span> 
                            </h5>
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>Endo Project</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>Endo Project</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq1 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={99} type="number" className="countq1" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq1 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1208(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={39} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={39} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={1} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Endo Project" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id="one_click_checkout" defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '50.5%', background: '#2ab673'}}>
                                <div className="progress-value">50.5%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>200 KD </strong></span>
                              <span><small>FUNDED</small> <strong>101  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>99 KD </strong></span> 
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={9} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTU" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTU" tabIndex={-1}>School Building</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTU" tabIndex={-1}>School Building</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq15 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={976} type="number" className="countq15" name="amount_pay" min={1} defaultValue={1000} tabIndex={-1} />
                                      <span className="plusq15 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1200(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={40} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={40} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={15} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="School Building" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '51.2%', background: '#2ab673'}}>
                                <div className="progress-value">51.2%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>2,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>1,024  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>976 KD </strong></span> 
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={10} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTM" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTM" tabIndex={-1}>A home for Orphans</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTM" tabIndex={-1}>A home for Orphans</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Many are cared for by extended family members. But some children have no one, while others were...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq13 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={3000} type="number" className="countq13" name="amount_pay" min={1} defaultValue={24} tabIndex={-1} />
                                      <span className="plusq13 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1201(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={40} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={40} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={13} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="A home for Orphans" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>3,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>3,000 KD </strong></span> 
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={11} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTI" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTI" tabIndex={-1}>Social Responsibility</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MTI" tabIndex={-1}>Social Responsibility</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Al safa plays a pivotal role in activating the principles of corporate social responsibility...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq12 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={200} type="number" className="countq12" name="amount_pay" min={1} defaultValue={20} tabIndex={-1} />
                                      <span className="plusq12 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1202(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={12} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Social Responsibility" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue Hide">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>200 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>200 KD </strong></span> 
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={12} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/OA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/OA" tabIndex={-1}>Charitable endowment</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/OA" tabIndex={-1}>Charitable endowment</a></h2>
                            <div className="TextHeight">
                              <div className="txt_dc">
                                <p>Suitable because of differences in word lengths between languages. However, for everyday life...</p>
                              </div>
                            </div>
                            <form method="post">
                              <div className="form-group">
                                <ul>
                                  <li><small>Enter your donation</small></li>
                                  <li className="DonationBtn">
                                    <div className="qty">
                                      <span className="minusq8 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={2269900} type="number" className="countq8" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq8 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1203(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={8} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Charitable endowment" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>2,270,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>100  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>2,269,900 KD </strong></span> 
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={13} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Nw" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Nw" tabIndex={-1}>Seven Benefits</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Nw" tabIndex={-1}>Seven Benefits</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq7 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={20} type="number" className="countq7" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq7 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1204(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={7} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Seven Benefits" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue Hide">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>20 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>20 KD </strong></span> 
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={14} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Ng" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Ng" tabIndex={-1}>Righteousness to parents</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Ng" tabIndex={-1}>Righteousness to parents</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq6 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={17000} type="number" className="countq6" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq6 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1205(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={6} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Righteousness to parents" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>17,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>17,000 KD </strong></span> 
                            </h5>
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
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>Provision of water</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/NQ" tabIndex={-1}>Provision of water</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq5 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={15000} type="number" className="countq5" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq5 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1206(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={5} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Provision of water" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>15,000 KD </strong></span> 
                            </h5>
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>AlSafa endowment XYZ</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/Mg" tabIndex={-1}>AlSafa endowment XYZ</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq2 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={2500} type="number" className="countq2" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq2 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1207(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={2} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="AlSafa endowment XYZ" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '16.67%', background: '#2ab673'}}>
                                <div className="progress-value">16.67%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>3,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>500  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>2,500 KD </strong></span> 
                            </h5>
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={EndowmentImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mw" tabIndex={-1}>Endowment</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>Endo Project</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/endowment_category_detail/MQ" tabIndex={-1}>Endo Project</a></h2>
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
                                    <div className="qty">
                                      <span className="minusq1 bg-dark"><i className="fa fa-minus" /></span>
                                      <input max={99} type="number" className="countq1" name="amount_pay" min={1} defaultValue={50} tabIndex={-1} />
                                      <span className="plusq1 bg-dark"><i className="fa fa-plus" /> </span>
                                    </div>
                                    {/*<input type="text" onkeypress="return isNumber(event)" required="required" name="amount_pay" id="amount_pay" onkeyup="this.value = rrdtxfferefdffuu1208(this.value, 0, 10000000000000000)" placeholder="Ex.50 KD" class="form-control" />*/}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="main_categoary_id" defaultValue={39} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={39} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={1} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Endo Project" tabIndex={-1} />
                              <div className="BtnSec">
                                <ul>
                                  <li>
                                    <input type="submit" name="add_to_cart_endo" className="btn btn-default" defaultValue="ADD TO CART" tabIndex={-1} />
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ADD TO CART</a></li> */}
                                  </li>
                                  <li>
                                    {/* <a class="btn btn-default" href="#">ONE CLICK CHECKOUT</a> */}
                                    <input type="submit" className="btn btn-default" id defaultValue="ONE CLICK CHECKOUT" name="one_click_endo" tabIndex={-1} />
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* <h4>KD 888</h4> */}
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '50.5%', background: '#2ab673'}}>
                                <div className="progress-value">50.5%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src={EndowmentImg}order.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>200 KD </strong></span>
                              <span><small>FUNDED</small> <strong>101  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>99 KD </strong></span> 
                            </h5>
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

export default Endowment