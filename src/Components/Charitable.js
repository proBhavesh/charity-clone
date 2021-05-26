import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
import sp from "../Assets/sp.jpg";
const Charitable = () => {
	return (
		<div>
			<div className="SponsorshipSec MaxHeight">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="SponsorshipText">
            <h2>SPONSORSHIP</h2>
            <div className="BorderBlock"><img src={sp}/><span /></div>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Name </strong> <span>: Jamal</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Age </strong> <span>: 
                                            1 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Name </strong> <span>: Adeel</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Age </strong> <span>: 
                                            0 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Gender </strong> <span>: </span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Name </strong> <span>: Abdullah</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Age </strong> <span>: 
                                            8 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NTU" tabIndex={0}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Name </strong> <span>: Pediatric Cancer Patient </span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Age </strong> <span>: 
                                            28 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={0}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NTU" tabIndex={0}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NTU" tabIndex={0}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={0}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Name </strong> <span>: Patients Fund Society</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Age </strong> <span>: 
                                            15 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Gender </strong> <span>: Female</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><strong>Type </strong> <span>: Cancer Patients</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: Yes</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={0}>
                                      <img src={sp}/></a>	
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NTQ" tabIndex={0}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NDE" tabIndex={0}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Name </strong> <span>: Jamal</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Age </strong> <span>: 
                                            1 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={0}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NDE" tabIndex={0}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NDE" tabIndex={0}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Name </strong> <span>: Adeel</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Age </strong> <span>: 
                                            0 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Gender </strong> <span>: </span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Name </strong> <span>: Abdullah</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Age </strong> <span>: 
                                            8 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NTU" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Name </strong> <span>: Pediatric Cancer Patient </span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Age </strong> <span>: 
                                            28 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NTU" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NTU" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Name </strong> <span>: Patients Fund Society</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Age </strong> <span>: 
                                            15 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Gender </strong> <span>: Female</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><strong>Type </strong> <span>: Cancer Patients</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: Yes</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}>
                                      <img src={sp}/></a>	
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NTQ" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Name </strong> <span>: Jamal</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Age </strong> <span>: 
                                            1 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><strong>Type </strong> <span>: Orphans</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NDE" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Name </strong> <span>: Adeel</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Age </strong> <span>: 
                                            0 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Gender </strong> <span>: </span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/NDA" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
                            <form method="post" action="Sponsorship_detail">
                              <div className="SponserHeader First">
                                <a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
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
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Name </strong> <span>: Abdullah</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Age </strong> <span>: 
                                            8 Years Old</span> </a>
                                      </li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Gender </strong> <span>: Male</span> </a></li>
                                      <li><a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><strong>Type </strong> <span>: Widows</span> </a></li>
                                      <li><strong>Urgent </strong> <span>: No</span> </li>
                                    </ul>
                                  </div>
                                  <div className="Sponsers_Right">
                                    <a href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}>
                                      <img src={sp} alt /></a>
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
                                    <a className="btn btn-default" href="sponsorship_category/sponsorship_project/Mzg" tabIndex={-1}><span className="sponsor_metext">Sponsor Me</span></a>
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
		</div>
	)
}

export default Charitable