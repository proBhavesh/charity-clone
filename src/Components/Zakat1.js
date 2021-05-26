import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
import ZakatImg from "../Assets/zakat.jpg";
const Zakat1 = () => {
	return (
		<div>
			<div className="SectionNew1 ZakatSecnew">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            {/* <h2>CHARITABLE PROJECTS</h2>
                  <div class="BorderBlock"><img src="/images/drop.jpg" /> <span></span></div>
                  <p>INTEGER AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA NOSTRA.</p> */}
            <h2>ZAKAT</h2>
            <div className="BorderBlock"><img src={ZakatImg} alt /><span /></div>
            <p>On the authority of Abu Al-Darda, may God be pleased with him, he said: The Messenger of God, may God’s prayers and peace be upon him, said: (Five of those who came with faith will enter Heaven: Whoever maintains the five daily prayers, on their ablution, kneeling, prostration and their timing, fasts Ramadan, and performs the pilgrimage to the house if he is able to do it, and he gives zakat Good by oneself) hadith</p>
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
            <ul id="flexiselDemo6" className="slick-initialized slick-slider" style={{display: 'block'}}>
              <div className="slick-list draggable">
                <div className="slick-track" style={{opacity: 1, width: 11780, transform: 'translate3d(-1140px, 0px, 0px)'}}>
                  <div className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src={ZakatImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTA" tabIndex={-1}><span>sdfsdfgseee ewe er</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p><span id>name </span>
                                </p>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTA" tabIndex={-1}>DONATE NOW</a></li>
                                </ul>
                              </div>
                              <div className="progress blue">
                                <div className="progress-bar" style={{width: '0.01%', background: '#2ab673'}}>
                                  <div className="progress-value">0.01%</div>
                                </div>
                              </div>
                              {/* <img class="borderImg" src="images/border.jpg" /> */}
                              <h5>
                                <span><small>TARGET</small> <strong>23,456 KD </strong></span>
                                <span><small>FUNDED</small> <strong>3  KD </strong></span> 
                                <span className="Last"><small>REMAINING</small> <strong>23,453 KD </strong></span> 
                              </h5>
                            </div>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contact_header.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTE" tabIndex={-1}><span>scvsdvsdfsdvsvdsdsvd</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvs....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTE" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '57.5%', background: '#2ab673'}}>
                                <div className="progress-value">57.5%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>600 KD </strong></span>
                              <span><small>FUNDED</small> <strong>345  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>255 KD </strong></span> 
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/ballot_box_1_1_3.png" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTI" tabIndex={-1}><span>Office Building</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat o....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTI" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '46.68%', background: '#2ab673'}}>
                                <div className="progress-value">46.68%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>7,002  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>7,998 KD </strong></span> 
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
                            <a href="/pay_donation/pay_your_zakat" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={ZakatImg} />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKAT</span></h1>
                            <h2><a href="/#" tabIndex={0}>Pay Your Zakat</a></h2>
                            <div className="TextHeight">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <form method="post" action="/pay_donation/pay_your_zakat">
                              <div className="form-group">
                                <ul>
                                  <li><small>Pay Your Zakat</small></li>
                                  <li><input type="number" min={1} onkeypress="return isNumber(event)" required="required" className="form-control" id="pay_zakat_amt" name="pay_zakat_amt" placeholder="500 KD" tabIndex={0} /></li>
                                </ul>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="DONATE NOW" tabIndex={0} /></li>
                                </ul>
                              </div>
                              <span id="pay_zakat_amterrss" style={{color: 'red'}} />
                            </form>
                            {/* <img class="borderImg" src="/images/border.jpg" /> */}
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
                            <a href="/zakat_calculator" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={ZakatImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKATt</span></h1>
                            <h2><a href="/#" tabIndex={0}>Calculate Your Zakat</a></h2>
                            <div className="TextCon">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li className="Full"><a target="_blank" className="btn btn-default" href="/zakat_calculator" tabIndex={0}>Calculate Your Zakat</a></li>
                              </ul>
                            </div>
                            {/* <img class="borderImg" src="/images/border.jpg" /> */}
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={0}>
                              <div className="Overlay" />
                              <img src={ZakatImg} alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={0}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MQ" tabIndex={0}><span>Zakat Foundation</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MQ" tabIndex={0}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner03.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Mg" tabIndex={-1}><span>wewewe</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Mg" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
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
                  <div className="slick-slide" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/BannerImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Mw" tabIndex={-1}><span>zakat demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Mw" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '144.08%', background: '#2ab673'}}>
                                <div className="progress-value">144.08%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>698 KD </strong></span>
                              <span><small>FUNDED</small> <strong>1,006  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>-308 KD </strong></span> 
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/NA" tabIndex={-1}><span>alm demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/NA" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '18.02%', background: '#2ab673'}}>
                                <div className="progress-value">18.02%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>666 KD </strong></span>
                              <span><small>FUNDED</small> <strong>120  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>546 KD </strong></span> 
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg511.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/NQ" tabIndex={-1}><span>atonement2</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/NQ" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>500 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>500 KD </strong></span> 
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg1.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Ng" tabIndex={-1}><span>realities4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Ng" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0.03%', background: '#2ab673'}}>
                                <div className="progress-value">0.03%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>8,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>2  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>7,998 KD </strong></span> 
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Nw" tabIndex={-1}><span>sacrifies demo</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Nw" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>6,980 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>6,980 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg4.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/OA" tabIndex={-1}><span>zakat testing project</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/OA" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '100%', background: '#2ab673'}}>
                                <div className="progress-value">100%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>6,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>6,000  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>0 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg52.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/OQ" tabIndex={-1}><span>My Zakat</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Zakat Foundation of America embodies the inclusive beauty of Islam through progr....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/OQ" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '100%', background: '#2ab673'}}>
                                <div className="progress-value">100%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>200 KD </strong></span>
                              <span><small>FUNDED</small> <strong>200  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>0 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/food_basket1_(1).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTA" tabIndex={-1}><span>sdfsdfgseee ewe er</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p><span id="docs-internal-guid-fb5230b3-7fff-c765-21ab-7cfc45e0522e">name </span>
                                </p>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTA" tabIndex={-1}>DONATE NOW</a></li>
                                </ul>
                              </div>
                              <div className="progress blue">
                                <div className="progress-bar" style={{width: '0.01%', background: '#2ab673'}}>
                                  <div className="progress-value">0.01%</div>
                                </div>
                              </div>
                              {/* <img class="borderImg" src="images/border.jpg" /> */}
                              <h5>
                                <span><small>TARGET</small> <strong>23,456 KD </strong></span>
                                <span><small>FUNDED</small> <strong>3  KD </strong></span> 
                                <span className="Last"><small>REMAINING</small> <strong>23,453 KD </strong></span> 
                              </h5>
                            </div>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contact_header.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTE" tabIndex={-1}><span>scvsdvsdfsdvsvdsdsvd</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvs....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTE" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '57.5%', background: '#2ab673'}}>
                                <div className="progress-value">57.5%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>600 KD </strong></span>
                              <span><small>FUNDED</small> <strong>345  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>255 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/ballot_box_1_1_3.png" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTI" tabIndex={-1}><span>Office Building</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat o....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTI" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '46.68%', background: '#2ab673'}}>
                                <div className="progress-value">46.68%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>7,002  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>7,998 KD </strong></span> 
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
                            <a href="/pay_donation/pay_your_zakat" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/charitableImg1.jpg" />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKAT</span></h1>
                            <h2><a href="/#" tabIndex={-1}>Pay Your Zakat</a></h2>
                            <div className="TextHeight">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <form method="post" action="/pay_donation/pay_your_zakat">
                              <div className="form-group">
                                <ul>
                                  <li><small>Pay Your Zakat</small></li>
                                  <li><input type="number" min={1} onkeypress="return isNumber(event)" required="required" className="form-control" id name="pay_zakat_amt" placeholder="500 KD" tabIndex={-1} /></li>
                                </ul>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="DONATE NOW" tabIndex={-1} /></li>
                                </ul>
                              </div>
                              <span id style={{color: 'red'}} />
                            </form>
                            {/* <img class="borderImg" src="/images/border.jpg" /> */}
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
                            <a href="/zakat_calculator" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/charitableImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKATt</span></h1>
                            <h2><a href="/#" tabIndex={-1}>Calculate Your Zakat</a></h2>
                            <div className="TextCon">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li className="Full"><a target="_blank" className="btn btn-default" href="/zakat_calculator" tabIndex={-1}>Calculate Your Zakat</a></li>
                              </ul>
                            </div>
                            {/* <img class="borderImg" src="/images/border.jpg" /> */}
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contactImg11.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MQ" tabIndex={-1}><span>Zakat Foundation</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MQ" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
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
                  <div className="slick-slide slick-cloned" data-slick-index={17} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner03.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Mg" tabIndex={-1}><span>wewewe</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Mg" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
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
                  <div className="slick-slide slick-cloned" data-slick-index={18} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/BannerImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Mw" tabIndex={-1}><span>zakat demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Mw" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '144.08%', background: '#2ab673'}}>
                                <div className="progress-value">144.08%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>698 KD </strong></span>
                              <span><small>FUNDED</small> <strong>1,006  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>-308 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/NA" tabIndex={-1}><span>alm demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/NA" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '18.02%', background: '#2ab673'}}>
                                <div className="progress-value">18.02%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>666 KD </strong></span>
                              <span><small>FUNDED</small> <strong>120  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>546 KD </strong></span> 
                            </h5>
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg511.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/NQ" tabIndex={-1}><span>atonement2</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/NQ" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>500 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>500 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg1.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Ng" tabIndex={-1}><span>realities4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Ng" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0.03%', background: '#2ab673'}}>
                                <div className="progress-value">0.03%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>8,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>2  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>7,998 KD </strong></span> 
                            </h5>
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/Nw" tabIndex={-1}><span>sacrifies demo</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/Nw" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                                <div className="progress-value">0%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>6,980 KD </strong></span>
                              <span><small>FUNDED</small> <strong>0  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>6,980 KD </strong></span> 
                            </h5>
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
                            <div className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg4.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/OA" tabIndex={-1}><span>zakat testing project</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/OA" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '100%', background: '#2ab673'}}>
                                <div className="progress-value">100%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>6,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>6,000  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>0 KD </strong></span> 
                            </h5>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={24} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <li style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="ImgBlock">
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg52.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/OQ" tabIndex={-1}><span>My Zakat</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Zakat Foundation of America embodies the inclusive beauty of Islam through progr....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/OQ" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '100%', background: '#2ab673'}}>
                                <div className="progress-value">100%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>200 KD </strong></span>
                              <span><small>FUNDED</small> <strong>200  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>0 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/food_basket1_(1).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTA" tabIndex={-1}><span>sdfsdfgseee ewe er</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p><span id>name</span>
                                </p>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTA" tabIndex={-1}>DONATE NOW</a></li>
                                </ul>
                              </div>
                              <div className="progress blue">
                                <div className="progress-bar" style={{width: '0.01%', background: '#2ab673'}}>
                                  <div className="progress-value">0.01%</div>
                                </div>
                              </div>
                              {/* <img class="borderImg" src="images/border.jpg" /> */}
                              <h5>
                                <span><small>TARGET</small> <strong>23,456 KD </strong></span>
                                <span><small>FUNDED</small> <strong>3  KD </strong></span> 
                                <span className="Last"><small>REMAINING</small> <strong>23,453 KD </strong></span> 
                              </h5>
                            </div>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contact_header.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTE" tabIndex={-1}><span>scvsdvsdfsdvsvdsdsvd</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvs....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTE" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '57.5%', background: '#2ab673'}}>
                                <div className="progress-value">57.5%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>600 KD </strong></span>
                              <span><small>FUNDED</small> <strong>345  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>255 KD </strong></span> 
                            </h5>
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
                            <a href="/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/ballot_box_1_1_3.png" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="/project_checkout/zakat_category_detail/MTI" tabIndex={-1}><span>Office Building</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat o....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="/project_checkout/zakat_category_detail/MTI" tabIndex={-1}>DONATE NOW</a></li>
                              </ul>
                            </div>
                            <div className="progress blue">
                              <div className="progress-bar" style={{width: '46.68%', background: '#2ab673'}}>
                                <div className="progress-value">46.68%</div>
                              </div>
                            </div>
                            {/* <img class="borderImg" src="images/border.jpg" /> */}
                            <h5>
                              <span><small>TARGET</small> <strong>15,000 KD </strong></span>
                              <span><small>FUNDED</small> <strong>7,002  KD </strong></span> 
                              <span className="Last"><small>REMAINING</small> <strong>7,998 KD </strong></span> 
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

export default Zakat1