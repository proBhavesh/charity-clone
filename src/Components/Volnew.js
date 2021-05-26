import React from 'react';
import "../Assets/bootstrap.min.css";
import "../Assets/flexslider.css";
import "../Assets/style.css";
import "../Assets/style2.css";
import "../Assets/style3.css";
import "../Assets/slick.css";
import VolImg1 from "../Assets/VolImg1.jpg";
const Volnew = () => {
	return (
		<div>
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
                  <li><a data-slide="prev" href="/#myCarousel" className><i className="fa fa-angle-left" /></a></li>
                  <li><a data-slide="next" href="/#myCarousel" className><i className="fa fa-angle-right" /></a></li>
                </ul>
              </nav>
              <div className="carousel-inner">
                <div className="item active">
                  <ul className="TopVolunteers">
                    <div className="thumbnails">
                      <li>
                        <div className="ThumbnailBlock">
                          <div className="thumbnail">
                            <img src={VolImg1} alt />
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
                            <img src={VolImg1}/>
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
                            <img src={VolImg1}/>
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
                            <img src={VolImg1}/>
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
                            <img src={VolImg1} alt />
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
		</div>
	)
}

export default Volnew