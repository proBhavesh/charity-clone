import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
import c1 from  "../Assets/c1.jpg";
const Banner = () => {
	return (
		<div>
			<div className="BannerSec" style={{marginTop:"-19px"}}>
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
          <img className="img-responsive" src={c1} alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>WE CAN CHANGE IT TOGETHER LETS DO IT NOW!</h2>
              INTEGER SIT AMET AUGUE IACULIS, ULTRICIES JUSTO NEC, COMMODO NISI, CLASSTACITI SOCIOSQU NISI, CLASSTACITI			          					            	
              <div className="BtnSec">
                <a target="_blank" className="btn btn-default">DONATE NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src={c1} alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>THIS IS THE DEMO TEXT FOR THE SLIDER ENGLISH TITLE</h2>
              This is the demo text for the slider description in English
              &nbsp;
              <div className="BtnSec">
                <a target="_blank"  className="btn btn-default">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src={c1} alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>fff</h2>
              Show interest in their interests. Donate to a project that works on causes the honoree cares about.
              <div className="BtnSec">
                <a target="_blank"  className="btn btn-default" />
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src={c1} alt />
          <div className="carousel-caption">
            <div className="container">
              <h2>Charity</h2>
              Whatever the reason, we’ll help you find the perfect project for a donation in honor of your honoree.
              <div className="BtnSec">
                <a target="_blank"  className="btn btn-default">Find the Perfect Choice</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" item">
          <img className="img-responsive" src={c1} alt />
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
                      <li className="Last"><a className="btn btn-default btn-default2">Campaign Details</a></li>
                      <li style={{display: 'none'}}><a className="Capaign" >Campaign Details</a></li>
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
      <a className="carousel-control left"  data-slide="prev"><i className="fa fa-angle-left" /></a>
      <a className="carousel-control right"  data-slide="next"><i className="fa fa-angle-right" /></a>
    </div>
		</div>
		</div>
	)
}

export default Banner