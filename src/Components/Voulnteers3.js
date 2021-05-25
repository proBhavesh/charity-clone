import React from "react";
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
// import "../Assets/font-awesome.min.css";

const Voulnteers2 = () => {
	return <>
  <div>
  <div className="UrgentBtnMain">
    <div className="Btn_Section">
      <a href="http://www.alsafakw.org/#" data-toggle="modal" data-target="#myModal_1"><img src="./alsafakw.org _ Home Page_files/FN_logo.png" alt /> <span>Urgent Help</span></a>
    </div>
    <div id="myModal_1" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal"><i className="fa fa-close" /></button>
          </div>
          <div className="modal-body">
            <div className="BtnMainBlock MinHeightNew">
              <div className="BtnMainHeader">
                <h2>Project Of The Day</h2>
              </div>
              <div className="BtnMainBody">
                <a href="http://www.alsafakw.org/#" data-toggle="modal" data-target="#myModal_2" className="close" data-dismiss="modal">
                  <img src="./alsafakw.org _ Home Page_files/My_Post_(39).jpg" alt />
                  <div className="BtnBodyText">
                    <h3>Khawaja Mosque</h3>
                    <small>Remaining</small>
                    <strong> 234   KD</strong>
                  </div>
                </a>
              </div>
            </div>
            <div className="BtnMainBlock MinHeight">
              <div className="BtnMainHeader Gray">
                <h2>Suggestions For You</h2>
              </div>
              <div className="BtnMainBody">
                <ul>
                  <li>
                    <div className="GrayBlock">
                      <div className="GrayBlockText">
                        <a href="http://www.alsafakw.org/zakat_calculator">
                          <img src="./alsafakw.org _ Home Page_files/AboutImg.jpg" alt />
                          <h4>Zakat Calculator</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="GrayBlock">
                      <div className="GrayBlockText">
                        <a href="http://www.alsafakw.org/charity_category/charity_category/Mg">
                          <img src="./alsafakw.org _ Home Page_files/NewsImg3.jpg" alt />
                          <h4>Projects</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="GrayBlock">
                      <div className="GrayBlockText">
                        <a href="http://www.alsafakw.org/sponsorship_category">
                          <img src="./alsafakw.org _ Home Page_files/VolunteersImg2.jpg" alt />
                          <h4>Sponsor an Orphan</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <a href="#" class="btn btn-default OurStaff">Our staff is currently unavailable</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="myModal_2" className="modal fade" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal"><i className="fa fa-close" /></button>
            <h2 className="modal-title">Project of the Day</h2>
          </div>
          <div className="modal-body">
            <div className="BodyBlock">
              <div className="BodyBlockHeader">
                <div className="BodyImgBlock">
                  {/* <div class="ribbon ribbon-top-left">
                           <span id="">Urgent</span></div> */}
                  <img src="./alsafakw.org _ Home Page_files/My_Post_(39).jpg" alt />
                </div>
              </div>
              <div className="BodyBlockBody">
                <h3>Khawaja Mosque</h3>
                <p>&lt;p&gt;Is the voltage provided by man to his community with his own will and in exchange for nothing intending thereby to bear some responsibilities in the areas aimed at achieving the humanitarian assistance&lt;/p&gt; 
                  <a href="http://www.alsafakw.org/project_checkout/project_category_detail/Nzc">Read more</a>
                </p>
                <form method="post">
                  <div className="form-group">
                    <label>Enter your donation</label>
                    <input type="number" max={234} min={1} onkeypress="return isNumber(event)" name="amount_pay" onkeyup="this.value = minmax44(this.value, 0, 100)" placeholder="Ex: 50 KD" className="form-control" id="amount_pays" />
                  </div>
                  <span id="amount_pay_error" style={{color: 'red'}} />
                  <div className="BtnSec">
                    <ul>
                      <li><input onclick="return validation_donation233()" type="submit" name="add_to_cart" className="btn btn-default" defaultValue="ADD TO CART" />
                      </li>
                      <li style={{display: 'none'}}><a target="_blank" href="http://www.alsafakw.org/#" id="one_click_checkout" className="btn btn-default">ONE CLICK CHECKOUT</a></li>
                    </ul>
                  </div>
                  <input type="hidden" name="main_categoary_id" defaultValue />
                  <input type="hidden" name="sub_category_id" defaultValue />
                  <input type="hidden" name="id" defaultValue={77} />
                  <input type="hidden" name="project_name" defaultValue="Khawaja Mosque" />
                </form>
                <div className="progress blue">
                  <div className="progress-bar" style={{width: '0%', background: '#2ab673'}}>
                    <div className="progress-value">0%</div>
                  </div>
                </div>
                <h5>
                  <span><small>TARGET</small> <strong>234 KD </strong></span>
                  <span className="Middel"><small>FUNDED</small> <strong>0  KD</strong></span> 
                  <span className="Last"><small>REMAINING</small> <strong>234 KD</strong></span> 
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="BannerSec">
    <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to={0} className="active" />
        <li data-target="#carousel" data-slide-to={1} className />
        <li data-target="#carousel" data-slide-to={2} className />
        <li data-target="#carousel" data-slide-to={3} className />
        <li data-target="#carousel" data-slide-to={4} className />
      </ol>
      <div className="carousel-inner">
        <div className="active  item">
          <img className="img-responsive" src="./alsafakw.org _ Home Page_files/سلايد211.jpg" alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>WE CAN CHANGE IT TOGETHER LETS DO IT NOW!</h2>
              INTEGER SIT AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI, CLASSTACITI SOCIOSQU NISI, CLASSTACITI			          					            	
              <div className="BtnSec">
                <a target="_blank" href="https://alsafakw.org/project_checkout/endowment_category_detail/Mw" className="btn btn-default">DONATE NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src="./alsafakw.org _ Home Page_files/سلايد71.jpg" alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>THIS IS THE DEMO TEXT FOR THE SLIDER ENGLISH TITLE</h2>
              This is the demo text for the slider description in English
              &nbsp;
              <div className="BtnSec">
                <a target="_blank" href="http://www.alsafakw.org/www.google.com" className="btn btn-default">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src="./alsafakw.org _ Home Page_files/thubmimage.jpg" alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>fff</h2>
              Show interest in their interests. Donate to a project that works on causes the honoree cares about.
              <div className="BtnSec">
                <a target="_blank" href="http://www.alsafakw.org/" className="btn btn-default" />
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src="./alsafakw.org _ Home Page_files/ch5.jpg" alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>Charity</h2>
              Whatever the reason, we’ll help you find the perfect project for a donation in honor of your honoree.
              <div className="BtnSec">
                <a target="_blank" href="http://www.alsafakw.org/charity_category/charitable_project_list/Mzg/Mw" className="btn btn-default">Find the Perfect Choice</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src="./alsafakw.org _ Home Page_files/1.jpg" alt />
          <div className="carousel-caption carousel-caption_3 ">
            <div className="CaptionBlock">
              <form method="post" action="http://www.alsafakw.org/pay_donation/pay_your_donat">
                <div className="CaptionHeader">
                  <h3>Winter Season 21</h3>
                  <small>Campaign ID : 8</small>
                </div>
                <div className="CaptionBody">
                  <div className="CaptionBlockSec">
                    <ul>
                      <li><label><input id="TextBox80" type="checkbox" onclick="CheckCheckboxes80(0)" defaultValue={1} name="txtChecked8[0]" defaultChecked="checked" /> <span>Foods</span></label></li>
                      <li>
                        <div className="input-group">
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelecttwo80" className="btn btn-danger btn-number" data-type="minus" data-field="txtCostAmount8[0]">
                              <span className="fa fa-minus" />
                            </button>
                          </span>
                          <input type="text" id="mySelecttwos80" name="txtCostAmount8[0]" onkeyup="calculateTotal8()" className="form-control input-number" defaultValue={200} min={0} max={10000} />
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelect80" className="btn btn-success btn-number" data-type="plus" data-field="txtCostAmount8[0]">
                              <span className="fa fa-plus" />
                            </button>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="CaptionBlockSec">
                    <ul>
                      <li><label><input id="TextBox81" type="checkbox" onclick="CheckCheckboxes81(1)" defaultValue={2} name="txtChecked8[1]" defaultChecked="checked" /> <span>Health</span></label></li>
                      <li>
                        <div className="input-group">
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelecttwo81" className="btn btn-danger btn-number" data-type="minus" data-field="txtCostAmount8[1]">
                              <span className="fa fa-minus" />
                            </button>
                          </span>
                          <input type="text" id="mySelecttwos81" name="txtCostAmount8[1]" onkeyup="calculateTotal8()" className="form-control input-number" defaultValue={500} min={1} max={10000} />
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelect81" className="btn btn-success btn-number" data-type="plus" data-field="txtCostAmount8[1]">
                              <span className="fa fa-plus" />
                            </button>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="CaptionBlockSec">
                    <ul>
                      <li><label><input id="TextBox82" type="checkbox" onclick="CheckCheckboxes82(2)" defaultValue={5} name="txtChecked8[2]" defaultChecked="checked" /> <span>School</span></label></li>
                      <li>
                        <div className="input-group">
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelecttwo82" className="btn btn-danger btn-number" data-type="minus" data-field="txtCostAmount8[2]">
                              <span className="fa fa-minus" />
                            </button>
                          </span>
                          <input type="text" id="mySelecttwos82" name="txtCostAmount8[2]" onkeyup="calculateTotal8()" className="form-control input-number" defaultValue={700} min={2} max={10000} />
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelect82" className="btn btn-success btn-number" data-type="plus" data-field="txtCostAmount8[2]">
                              <span className="fa fa-plus" />
                            </button>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="CaptionBlockSec">
                    <ul>
                      <li><label><input id="TextBox83" type="checkbox" onclick="CheckCheckboxes83(3)" defaultValue={6} name="txtChecked8[3]" defaultChecked="checked" /> <span>Shelter</span></label></li>
                      <li>
                        <div className="input-group">
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelecttwo83" className="btn btn-danger btn-number" data-type="minus" data-field="txtCostAmount8[3]">
                              <span className="fa fa-minus" />
                            </button>
                          </span>
                          <input type="text" id="mySelecttwos83" name="txtCostAmount8[3]" onkeyup="calculateTotal8()" className="form-control input-number" defaultValue={900} min={3} max={10000} />
                          <span className="input-group-btn">
                            <button type="button" onclick="return onckkk8()" id="mySelect83" className="btn btn-success btn-number" data-type="plus" data-field="txtCostAmount8[3]">
                              <span className="fa fa-plus" />
                            </button>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="CaptionFooter">
                  <input type="text" id="grandtotal" name="add_to_campaign8" readOnly="readonly" className="form-control" />
                  <div className="BtnSection">
                    <ul>
                      <li><input type="submit" className="btn btn-default" name="add_to_cart_campaign" defaultValue="Donate Now" /></li>
                      <li className="Last"><a href="http://www.alsafakw.org/campaigns_cat" className="btn btn-default btn-default2">Campaign Details</a></li>
                      <li style={{display: 'none'}}><a className="Capaign" href="http://www.alsafakw.org/#">Campaign Details</a></li>
                    </ul>
                  </div>
                </div>
                <input type="hidden" name="campaign_title" defaultValue="Winter Season 21" />
                <input type="hidden" name="campaign_id" defaultValue={8} />
                <input type="hidden" name="from_home" defaultValue={1} />
                <input type="hidden" onclick="calculateTotal8()" id="iuo8" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control left" href="http://www.alsafakw.org/#carousel" data-slide="prev"><i className="fa fa-angle-left" /></a>
      <a className="carousel-control right" href="http://www.alsafakw.org/#carousel" data-slide="next"><i className="fa fa-angle-right" /></a>
    </div>
  </div>
  <div className="SponsorshipSec MaxHeight">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            <h2>SPONSORSHIP</h2>
            <div className="BorderBlock"><img src="./alsafakw.org _ Home Page_files/drop.jpg" alt /><span /></div>
            <p>Sponsoring the needy and poor is a great reward, and a great favor, but alms to a brother in need is better. For the Prophet, may God’s prayers and peace be upon him, said: Charity for the needy is charity, and it is for the one who has the mercy of two: charity and prayer.</p>
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
            <div id="flexiselDemo2" className="slick-initialized slick-slider" style={{display: 'block'}}>
              <div className="slick-list draggable">
                <div className="slick-track" style={{opacity: 1, width: 4940, transform: 'translate3d(-1140px, 0px, 0px)'}}>
                  <div className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Orphans</h3>
                                    </li>
                                    <li><small>SP41</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Name </strong> <span>: Jamal</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Age </strong> <span>: 
                                            1 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(21).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext41(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext41(this.value,'yearly')" defaultValue="14400@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>14,400 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Jamal" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Widows</h3>
                                    </li>
                                    <li><small>SP40</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Name </strong> <span>: Adeel</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Age </strong> <span>: 
                                            0 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Gender </strong> <span>: </span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(22).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext40(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext40(this.value,'yearly')" defaultValue="1200@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>1,200 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={40} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Adeel" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Widows</h3>
                                    </li>
                                    <li><small>SP38</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Name </strong> <span>: Abdullah</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Age </strong> <span>: 
                                            8 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(25).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext38(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext38(this.value,'yearly')" defaultValue="1200@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>1,200 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Abdullah" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={0}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Orphans</h3>
                                    </li>
                                    <li><small>SP55</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Name </strong> <span>: Pediatric Cancer Patient </span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Age </strong> <span>: 
                                            28 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={0}>
                                      <img src="./alsafakw.org _ Home Page_files/PoorFoolhardyIchthyosaurs-size_restricted.gif" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kuwait</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext55(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext55(this.value,'yearly')" defaultValue="15900@yearly" name="sponsor_name" tabIndex={0} /> <span> <em>15,900 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={0} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={0}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={0} />
                              <input type="hidden" id="donation_type_change55" name="donation_type" defaultValue="yearly" tabIndex={0} />
                              <input type="hidden" name="main_categoary_id" defaultValue={41} tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue={41} tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={55} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="Pediatric Cancer Patient " tabIndex={0} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'block'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={0}>
                                  <ul>
                                    <li>
                                      <h3 style={{padding: '0 0 0 56px'}}>Sponsorship | Cancer Patients</h3>
                                    </li>
                                    <li><small>SP54</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Name </strong> <span>: Patients Fund Society</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Age </strong> <span>: 
                                            15 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Gender </strong> <span>: Female</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Type </strong> <span>: Cancer Patients</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: Yes</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={0}>
                                      <img src="./alsafakw.org _ Home Page_files/38d8e779fa82f1b951b9bf19cb2229e5.jpg" alt /></a>	
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Lebanon</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext54(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext54(this.value,'yearly')" defaultValue="14500@yearly" name="sponsor_name" tabIndex={0} /> <span> <em>14,500 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={0} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={0} />
                              <input type="hidden" id="donation_type_change54" name="donation_type" defaultValue="yearly" tabIndex={0} />
                              <input type="hidden" name="main_categoary_id" defaultValue={43} tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue={43} tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={54} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="Patients Fund Society" tabIndex={0} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={0}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Orphans</h3>
                                    </li>
                                    <li><small>SP41</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Name </strong> <span>: Jamal</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Age </strong> <span>: 
                                            1 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={0}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(21).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext41(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext41(this.value,'yearly')" defaultValue="14400@yearly" name="sponsor_name" tabIndex={0} /> <span> <em>14,400 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={0} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={0}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={0} />
                              <input type="hidden" id="donation_type_change41" name="donation_type" defaultValue="yearly" tabIndex={0} />
                              <input type="hidden" name="main_categoary_id" defaultValue={41} tabIndex={0} />
                              <input type="hidden" name="sub_category_id" defaultValue={41} tabIndex={0} />
                              <input type="hidden" name="id" defaultValue={41} tabIndex={0} />
                              <input type="hidden" name="project_name" defaultValue="Jamal" tabIndex={0} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={3} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Widows</h3>
                                    </li>
                                    <li><small>SP40</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Name </strong> <span>: Adeel</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Age </strong> <span>: 
                                            0 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Gender </strong> <span>: </span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(22).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext40(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext40(this.value,'yearly')" defaultValue="1200@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>1,200 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id="donation_type_change40" name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={40} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Adeel" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Widows</h3>
                                    </li>
                                    <li><small>SP38</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Name </strong> <span>: Abdullah</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Age </strong> <span>: 
                                            8 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(25).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext38(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext38(this.value,'yearly')" defaultValue="1200@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>1,200 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id="donation_type_change38" name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Abdullah" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Orphans</h3>
                                    </li>
                                    <li><small>SP55</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Name </strong> <span>: Pediatric Cancer Patient </span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Age </strong> <span>: 
                                            28 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/PoorFoolhardyIchthyosaurs-size_restricted.gif" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kuwait</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext55(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext55(this.value,'yearly')" defaultValue="15900@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>15,900 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={55} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Pediatric Cancer Patient " tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={6} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'block'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3 style={{padding: '0 0 0 56px'}}>Sponsorship | Cancer Patients</h3>
                                    </li>
                                    <li><small>SP54</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Name </strong> <span>: Patients Fund Society</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Age </strong> <span>: 
                                            15 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Gender </strong> <span>: Female</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Type </strong> <span>: Cancer Patients</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: Yes</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/38d8e779fa82f1b951b9bf19cb2229e5.jpg" alt /></a>	
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Lebanon</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext54(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext54(this.value,'yearly')" defaultValue="14500@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>14,500 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={43} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={43} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={54} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Patients Fund Society" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={7} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Orphans</h3>
                                    </li>
                                    <li><small>SP41</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Name </strong> <span>: Jamal</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Age </strong> <span>: 
                                            1 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(21).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext41(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext41(this.value,'yearly')" defaultValue="14400@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>14,400 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={41} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Jamal" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={8} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Widows</h3>
                                    </li>
                                    <li><small>SP40</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Name </strong> <span>: Adeel</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Age </strong> <span>: 
                                            0 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Gender </strong> <span>: </span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(22).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext40(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext40(this.value,'yearly')" defaultValue="1200@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>1,200 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={40} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Adeel" tabIndex={-1} />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide slick-cloned" data-slick-index={9} aria-hidden="true" tabIndex={-1} style={{width: 380}}>
                    <div>
                      <div style={{width: '100%', display: 'inline-block'}}>
                        <div className="NewBlockSection">
                          <div className="SponserCatBlock">
                            <div style={{display: 'none'}} className="ribbon ribbon-top-left"><span style={{background: '#f91302', color: '#ffffff'}}>Urgent</span></div>
                            <form method="post" action="http://www.alsafakw.org/Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                  <ul>
                                    <li>
                                      <h3>Sponsorship | Widows</h3>
                                    </li>
                                    <li><small>SP38</small></li>
                                  </ul>
                                </a>
                              </div>
                              <div className="SponserBody">
                                <div className="Sponsers_Block">
                                  <div className="Sponsers_Left">
                                    <ul>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Name </strong> <span>: Abdullah</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Age </strong> <span>: 
                                            8 Years Old</span> </a>
                                      </li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                      <img src="./alsafakw.org _ Home Page_files/Sponsorship_subcategory_icon_(25).jpg" alt /></a>
                                  </div>
                                </div>
                                <div className="Sponsers_Block First Country">
                                  <ul>
                                    <li style={{textAlign: 'left'}}><strong>Country : </strong><span>Kyrgyzstan</span></li>
                                  </ul>
                                </div>
                                <div className="Sponsers_Block">
                                  <h4 style={{textAlign: 'left'}}>You can choose between:</h4>
                                  <div className="checkbox">
                                    {/* <ul>
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                      <li><label><span> Automatically deducted (Monthly)</span></label></li>
                                                      
                                                      <li><label><input type="radio" onclick="send_value_totext(this.value)" value="0" name="sponsor_name"> <span>0 KD</span></label></li>
                                                         <li><label><span>Renewal is subject to Approval (Yearly)</span></label></li>
                                                      </ul> */}
                                    <ul>
                                      {/*<li><label><input checked="checked" type="radio" onclick="send_value_totext38(this.value,'monthly')" value="10000000000@monthly" name="sponsor_name"> <span> <em>10,000,000,000 KD (Monthly)</em> Automatically deducted </span></label></li>*/}
                                      <li><label><input type="hidden" onclick="send_value_totext38(this.value,'yearly')" defaultValue="1200@yearly" name="sponsor_name" tabIndex={-1} /> <span> <em>1,200 KD (Yearly)</em> Renewal is subject to Approval </span></label></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="Sponser_Footer">
                                <ul>
                                  <li><input type="submit" className="btn btn-default" name="add_to_cart" defaultValue="Add To Cart" tabIndex={-1} /></li>
                                  <li>
                                    <a className="btn btn-default" href="http://www.alsafakw.org/sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
                                    {/* <input type="submit" class="btn btn-default btn-default2" name="add_to_cart" value="Sponsor Me" /> */}
                                  </li>
                                </ul>
                              </div>
                              <input type="hidden" name="index_send" defaultValue="index_send" tabIndex={-1} />
                              <input type="hidden" id name="donation_type" defaultValue="yearly" tabIndex={-1} />
                              <input type="hidden" name="main_categoary_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="sub_category_id" defaultValue={42} tabIndex={-1} />
                              <input type="hidden" name="id" defaultValue={38} tabIndex={-1} />
                              <input type="hidden" name="project_name" defaultValue="Abdullah" tabIndex={-1} />
                            </form>
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
      </div>
    </div>
  </div>
  <div className="CharitableSec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            {/* <h2>CHARITABLE PROJECTS</h2>
                  <div class="BorderBlock"><img src="http://www.alsafakw.org/images/drop.jpg" /> <span></span></div>
                  <p>INTEGER AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA NOSTRA.</p> */}
            <h2>CHARITABLE PROJECTS</h2>
            <div className="BorderBlock"><img src="./alsafakw.org _ Home Page_files/drop.jpg" alt /><span /></div>
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(29).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(28).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(13).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/Nzc" tabIndex={0}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(39).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={0}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/Nzc" tabIndex={0}>Khawaja Mosque</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/Nzc" tabIndex={0}>Khawaja Mosque</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTU" tabIndex={0}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(38).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={0}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTU" tabIndex={0}>School</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTU" tabIndex={0}>School</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTQ" tabIndex={0}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(23).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={0}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTQ" tabIndex={0}>Cows</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTQ" tabIndex={0}>Cows</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTM" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner01.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDk" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(19).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(20).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDc" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(21).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(42).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(35).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzY" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(34).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(33).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(31).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(29).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(28).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(13).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/Nzc" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(39).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/Nzc" tabIndex={-1}>Khawaja Mosque</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/Nzc" tabIndex={-1}>Khawaja Mosque</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTU" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(38).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTU" tabIndex={-1}>School</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTU" tabIndex={-1}>School</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(23).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTQ" tabIndex={-1}>Cows</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTQ" tabIndex={-1}>Cows</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTM" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner01.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NTM" tabIndex={-1}>Sewing Machines</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDk" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(19).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDk" tabIndex={-1}>Building school in Indonesia</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(20).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDg" tabIndex={-1}>Widows Sponsorship</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDc" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(21).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDc" tabIndex={-1}>Bakery and coffee shop for orphanage</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(42).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDQ" tabIndex={-1}>Continous Benefits</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(35).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/NDE" tabIndex={-1}>Building Mosques 10x12 mts</a></h2>
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
                                  {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzY" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(34).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzY" tabIndex={-1}>school demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(33).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzQ" tabIndex={-1}>sacrificial demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzE" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(31).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzE" tabIndex={-1}>indoor demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(29).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MzA" tabIndex={-1}>external demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(28).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MjI" tabIndex={-1}>shewing demo</a></h2>
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
                                {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(13).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span><a href="http://www.alsafakw.org/charity_category/charity_category/Mg" tabIndex={-1}>Project</a></span> <i className="fa fa-angle-double-right" /> <span><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></span></h1>
                            {/* <i class="fa fa-angle-double-right"></i> <span>Building Schools</span> </h1> */}
                            <h2><a href="http://www.alsafakw.org/project_checkout/project_category_detail/MTg" tabIndex={-1}>farm demo</a></h2>
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
                              {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
  <div className="SectionNew1 EndowmentSection">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            {/* <h2>CHARITABLE PROJECTS</h2>
                  <div class="BorderBlock"><img src="http://www.alsafakw.org/images/drop.jpg" /> <span></span></div>
                  <p>INTEGER AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA NOSTRA.</p> */}
            <h2>ENDOWMENT</h2>
            <div className="BorderBlock"><img src="./alsafakw.org _ Home Page_files/drop.jpg" alt /><span /></div>
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(7).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(10).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(2).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post.jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(1).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(3).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(4).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(5).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(6).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(7).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(10).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(2).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post.jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(1).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(3).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(4).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(5).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(6).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(7).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(10).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                              <img src="./alsafakw.org _ Home Page_files/My_Post_(2).jpg" alt />
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
  <div className="SectionNew1 ZakatSecnew">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            {/* <h2>CHARITABLE PROJECTS</h2>
                  <div class="BorderBlock"><img src="http://www.alsafakw.org/images/drop.jpg" /> <span></span></div>
                  <p>INTEGER AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA NOSTRA.</p> */}
            <h2>ZAKAT</h2>
            <div className="BorderBlock"><img src="./alsafakw.org _ Home Page_files/drop.jpg" alt /><span /></div>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/food_basket1_(1).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTA" tabIndex={-1}><span>sdfsdfgseee ewe er</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p><span id>name </span>
                                </p>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTA" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contact_header.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTE" tabIndex={-1}><span>scvsdvsdfsdvsvdsdsvd</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvs....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTE" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/ballot_box_1_1_3.png" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTI" tabIndex={-1}><span>Office Building</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat o....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTI" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/pay_donation/pay_your_zakat" tabIndex={0}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/charitableImg1.jpg" />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKAT</span></h1>
                            <h2><a href="http://www.alsafakw.org/#" tabIndex={0}>Pay Your Zakat</a></h2>
                            <div className="TextHeight">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <form method="post" action="http://www.alsafakw.org/pay_donation/pay_your_zakat">
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/zakat_calculator" tabIndex={0}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/charitableImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKATt</span></h1>
                            <h2><a href="http://www.alsafakw.org/#" tabIndex={0}>Calculate Your Zakat</a></h2>
                            <div className="TextCon">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li className="Full"><a target="_blank" className="btn btn-default" href="http://www.alsafakw.org/zakat_calculator" tabIndex={0}>Calculate Your Zakat</a></li>
                              </ul>
                            </div>
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={0}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contactImg11.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={0}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MQ" tabIndex={0}><span>Zakat Foundation</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MQ" tabIndex={0}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner03.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mg" tabIndex={-1}><span>wewewe</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mg" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/BannerImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mw" tabIndex={-1}><span>zakat demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mw" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NA" tabIndex={-1}><span>alm demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NA" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg511.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NQ" tabIndex={-1}><span>atonement2</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NQ" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg1.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Ng" tabIndex={-1}><span>realities4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Ng" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Nw" tabIndex={-1}><span>sacrifies demo</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Nw" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg4.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OA" tabIndex={-1}><span>zakat testing project</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OA" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg52.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OQ" tabIndex={-1}><span>My Zakat</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Zakat Foundation of America embodies the inclusive beauty of Islam through progr....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OQ" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/food_basket1_(1).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTA" tabIndex={-1}><span>sdfsdfgseee ewe er</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p><span id="docs-internal-guid-fb5230b3-7fff-c765-21ab-7cfc45e0522e">name </span>
                                </p>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTA" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contact_header.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTE" tabIndex={-1}><span>scvsdvsdfsdvsvdsdsvd</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvs....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTE" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/ballot_box_1_1_3.png" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTI" tabIndex={-1}><span>Office Building</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat o....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTI" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/pay_donation/pay_your_zakat" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/charitableImg1.jpg" />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKAT</span></h1>
                            <h2><a href="http://www.alsafakw.org/#" tabIndex={-1}>Pay Your Zakat</a></h2>
                            <div className="TextHeight">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <form method="post" action="http://www.alsafakw.org/pay_donation/pay_your_zakat">
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
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/zakat_calculator" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/charitableImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><span>ZAKATt</span></h1>
                            <h2><a href="http://www.alsafakw.org/#" tabIndex={-1}>Calculate Your Zakat</a></h2>
                            <div className="TextCon">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat orci. Fusce sit amet lorem pretium, eleifend orci id, pretium nisi....</p>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li className="Full"><a target="_blank" className="btn btn-default" href="http://www.alsafakw.org/zakat_calculator" tabIndex={-1}>Calculate Your Zakat</a></li>
                              </ul>
                            </div>
                            {/* <img class="borderImg" src="http://www.alsafakw.org/images/border.jpg" /> */}
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contactImg11.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MQ" tabIndex={-1}><span>Zakat Foundation</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MQ" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner03.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mg" tabIndex={-1}><span>wewewe</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mg" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/BannerImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mw" tabIndex={-1}><span>zakat demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Mw" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/banner.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NA" tabIndex={-1}><span>alm demo4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NA" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg511.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NQ" tabIndex={-1}><span>atonement2</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/NQ" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg1.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Ng" tabIndex={-1}><span>realities4</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Ng" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg2.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Nw" tabIndex={-1}><span>sacrifies demo</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/Nw" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg4.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OA" tabIndex={-1}><span>zakat testing project</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OA" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/projectImg52.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OQ" tabIndex={-1}><span>My Zakat</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                Zakat Foundation of America embodies the inclusive beauty of Islam through progr....							    		
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/OQ" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/food_basket1_(1).jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTA" tabIndex={-1}><span>sdfsdfgseee ewe er</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p><span id>name</span>
                                </p>
                              </div>
                              <div className="BtnSec">
                                <ul>
                                  <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTA" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/contact_header.jpg" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTE" tabIndex={-1}><span>scvsdvsdfsdvsvdsdsvd</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvsvdsdsvd</p>
                                <p>&nbsp;scvsdvsdfsdvs....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTE" tabIndex={-1}>DONATE NOW</a></li>
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
                            <a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}>
                              <div className="Overlay" />
                              <img src="./alsafakw.org _ Home Page_files/ballot_box_1_1_3.png" alt />
                            </a>
                          </div>
                          <div className="SponsorText">
                            <h1><a href="http://www.alsafakw.org/charity_category/charity_category/MQ" tabIndex={-1}><span>Zakat Project</span></a> <i className="fa fa-angle-double-right" /><a href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTI" tabIndex={-1}><span>Office Building</span></a></h1>
                            <div className="form-group2">
                              <div className="TextHeight">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat o....							    		</p>
                              </div>
                            </div>
                            <div className="BtnSec">
                              <ul>
                                <li><a className="btn btn-default" href="http://www.alsafakw.org/project_checkout/zakat_category_detail/MTI" tabIndex={-1}>DONATE NOW</a></li>
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
  <div className="VideoSection">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="VideoMainSec">
            <div className="VideoLeft">
              <iframe src="./alsafakw.org _ Home Page_files/FT6sWo9Y1jw.html" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
                  <img src="./alsafakw.org _ Home Page_files/videoImg.jpg" alt />
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
                    <a href="http://www.alsafakw.org/news_detail/index/MQ"><img src="./alsafakw.org _ Home Page_files/SponsorsImg1.jpg" alt /></a>
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
                    <a href="http://www.alsafakw.org/news_detail/index/Mg"><img src="./alsafakw.org _ Home Page_files/SponsorsImg21.jpg" alt /></a>
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
                      <a href="http://www.alsafakw.org/news_detail/news_details_latest/Mg"><img src="./alsafakw.org _ Home Page_files/SponsorsImg21(1).jpg" alt /></a>
                      <div className="NewsText">
                        <h3><a href="http://www.alsafakw.org/news_detail/news_details_latest/Mg">ORGANIZED FOOD CAMP FOR CHILDREN</a></h3>
                        <p>May 06 , 2019</p>
                      </div>
                    </li>
                    <li>
                      <a href="http://www.alsafakw.org/news_detail/news_details_latest/MQ"><img src="./alsafakw.org _ Home Page_files/SponsorsImg1(1).jpg" alt /></a>
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
  <div className="VolunteersSec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="VolunteersMain">
            &gt;
            <div className="progress-value">46.68%</div>
            <div className="carousel slide" id="myCarousel">
              <div className="VolunteersHead">
                <h2>VOLUNTEERS</h2>
                <div className="BorderBlock"><span /></div>
              </div>
              <nav>
                <ul className="control-box pager">
                  <li><a data-slide="prev" href="http://www.alsafakw.org/#myCarousel" className><i className="fa fa-angle-left" /></a></li>
                  <li><a data-slide="next" href="http://www.alsafakw.org/#myCarousel" className><i className="fa fa-angle-right" /></a></li>
                </ul>
              </nav>
              <div className="carousel-inner">
                <div className="item active">
                  <ul className="TopVolunteers">
                    <div className="thumbnails">
                      <li>
                        <div className="ThumbnailBlock">
                          <div className="thumbnail">
                            <img src="./alsafakw.org _ Home Page_files/VolunteersImg2(1).jpg" alt />
                          </div>
                          <div className="caption">
                            <h4>Aaban Abadi </h4>
                            <p>					          		     </p>
                            <p>Donec varius ultrices purus. ullam sit amet sapien tortor. Aenean it inteum felis, vel placerat &nbsp;nec.felis, vel placerat &nbsp;nec</p>
                            <p />
                            <ul>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ThumbnailBlock">
                          <div className="thumbnail">
                            <img src="./alsafakw.org _ Home Page_files/VolunteersImg3.jpg" alt />
                          </div>
                          <div className="caption">
                            <h4>Aalee Amin</h4>
                            <p>					          		     </p>
                            <p>Donec varius ultrices purus. ullam sit amet sapien tortor. Aenean it inteum felis, vel placerat &nbsp;nec.felis, vel placerat &nbsp;nec</p>
                            <p />
                            <ul>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ThumbnailBlock">
                          <div className="thumbnail">
                            <img src="./alsafakw.org _ Home Page_files/VolunteersImg31.jpg" alt />
                          </div>
                          <div className="caption">
                            <h4>Aabid Abdallah</h4>
                            <p>					          		     </p>
                            <p>Donec varius ultrices purus. ullam sit amet sapien tortor. Aenean it inteum felis, vel placerat &nbsp;nec.felis, vel placerat &nbsp;nec</p>
                            <p />
                            <ul>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ThumbnailBlock">
                          <div className="thumbnail">
                            <img src="./alsafakw.org _ Home Page_files/VolunteersImg33.jpg" alt />
                          </div>
                          <div className="caption">
                            <h4>Aatif Asghar</h4>
                            <p>					          		     </p>
                            <p>Donec varius ultrices purus. ullam sit amet sapien tortor. Aenean it inteum felis, vel placerat &nbsp;nec.felis, vel placerat &nbsp;nec</p>
                            <p />
                            <ul>
                              <li><a target="_blank" href="https://www.youtube.com/"><i className="fa fa-facebook" /></a></li>
                              <li><a target="_blank" href="https://www.youtube.com/"><i className="fa fa-twitter" /></a></li>
                              <li><a target="_blank" href="https://www.youtube.com/"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ThumbnailBlock">
                          <div className="thumbnail">
                            <img src="./alsafakw.org _ Home Page_files/1000x245-relief.jpg" alt />
                          </div>
                          <div className="caption">
                            <h4>Aatif Asghar 2</h4>
                            <p>					          		     </p>
                            <p>Donec varius ultrices purus. ullam sit amet sapien tortor. Aenean it inteum felis, vel placerat&nbsp; nec.felis, vel placerat&nbsp; nec</p>
                            <p />
                            <ul>
                              <li><a target="_blank" href="https://www.facebook.com/alsafakw"><i className="fa fa-facebook" /></a></li>
                              <li><a target="_blank" href="https://twitter.com/alsafakw"><i className="fa fa-twitter" /></a></li>
                              <li><a target="_blank" href="https://www.linkedin.com/alsafakw"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

	</>;
};

export default Voulnteers2;
