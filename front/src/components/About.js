import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Footer from './Footer';
import Head from './Head';
import '../App.css';
const About = () => {

    return (
        <div><Head/>
                   
                   <div className="container-fluid boxbg">
			<div className="row">
				<div className="col-md-4">
					<div className="left-cont">
						<h3 style={{color:"#965f1f"}}>Executive Body</h3>
                        <hr/>

						<i className="fas fa-user-tie"></i> <b>President :</b> Mr. Shankar Jhunjhunwala<br/>
                        <hr/>
						<i className="fas fa-user-tie"></i> <b>Vice President :</b> Mr.Shrikant Badve<br/>
                        <hr/>
						<i className="fas fa-user-tie"></i> <b>Secretary :</b> Prof.Jeevan Salunke<br/>
                        <hr/>
						<i className="fas fa-user-tie"></i> <b>Treasurer :</b> Dr.B.M.Patil <br/>
                        <hr/>
						<i className="fas fa-user-tie"></i> <b>Faculty In charge :</b> Prof. P.B.Murmude <br/>
                        <hr/>
						<i className="fas fa-user-tie"></i> <b>Convener :</b> Dr.A.B.Kulkarni <br/>
						
					</div>

				</div>
				<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
					<div className="right-cont">
						<h3 style={{color:"#965f1f"}}>Distinguished Alumni</h3>
						<hr style={{width: "90%",background: "#2d417b",height: "0.5px"}}/>
						<li>Shrikant Badve, Industrialist, Badve Engg. Got National Award for Quality products by the hands of the president of India.</li>
						<li>Magal Kakkad, Indian Navy , selected for Antaractica Expedition.</li>
						<li>Dolly Devgan ,working as a Fighter Pilot Indian Air Force.</li>
						<li>Chanderashekar Kachole ,Scientiest in NASA , USA.</li>
						<li>Anurag Parikh ,MBA from IIM Ahmedabad consultant Exeter Group Inc.USA.</li>
						<li>Dr.Swapneshu Baser,Adjunct Faculty ,IIT Mumbai,got young Engineer Award 2000 by Indian National Acedmy of Engg. During last 21 years approximately 10,000 students have pursued their bachelors from the college. The College has established ALUMNI association to keep in touch with ex-students. Previously Alumni association was existed in formally but now it is registered, the association vide letter no MHA/497/04 Dated 30/07/2004. JNEC Alumni association has 2041 members till date.</li>
						<hr/>

					</div>
                    <div class="whitebox-tube ">
							<div class="context-box">
                            <div class="context-text">
                                    <strong>Vision</strong><hr></hr>
                                         <p>
                                         To create self-reliant, continuous learner and competent technocrats imbued with human values,
                                        To be a Value based Globally Recognized 
                                        Institution ensuring academic excellence
                                         and fostering Research, Innovation and 
                                         Entrepreneurial Attitude.
                                         </p>
                                         <p>
                                             <strong>Mission</strong><hr></hr>
                                          The mission of the Alumni Association 
                                             of 
                                            Jawaharlal Nehru Engineering College is to reach,
                                              engage and serve all alumni, present students 
                                              by networking with one another to foster a
                                               life-long intellectual and emotional connection
                                                between the college and its graduates.
                                                 The association serves the need of COEP 
                                                 alumni for leadership, voluntary commitment,
                                                  goodwill, financial support, enhancing industry-academic
                                                   collaboration and communications including public relations.
                                        </p>
                                                
                                                  </div>
                                                  </div>
					</div>

				</div>


			</div>
		</div>
        <Footer/>
        </div>
    )
}

export default About
