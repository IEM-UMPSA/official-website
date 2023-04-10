import React, { Component } from 'react';
import Cta from '../Home/CtaSection';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CourseAccordion from '../Elements/Accordion/CourseAccordion';

import Link from 'next/link';
import CourseSidebar from './CourseSidebar';
import SEO from '../SEO';

class CompetitionDetailsMain extends Component {

    render() {
        return (
            
            <React.Fragment>
            <SEO 
                pageTitle="InvencMax 3.0 | IEM-UTM Student Section"
                pageDescription="InvencMax is an annual invention competition aimed at incentivizing STEAM awareness among undergraduate students and promoting sustainable product design and marketing."
                pageKeywords="InvencMax 3.0, IEM-UTM, competition"
                pageImage="/assets/img/competition/invencmax.jpg"
                pageURL={`https://iemumpss.vercel.app/competition/invenmax-3.0`}
                pageImageAlt="InvencMax 3.0"
                
            />
            <main>
                {/* course tab-start */}
				<section className="page__title-area pt-120 pb-90">
                    <div className="page__title-shape">
                        <img className="page-title-shape-5 d-none d-sm-block" src="/assets/img/page-title/page-title-shape-1.png" alt="img not found"/>
                        <img className="page-title-shape-7" src="/assets/img/page-title/page-title-shape-4.png" alt="img not found"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="course__wrapper">
                                    <div className="page__title-content mb-25">
                                        <div className="page__title-breadcrumb">                            
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="/competition">Competition</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">InvencMax 3.0</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    <span className="page__title-pre">Competition</span>
                                    <h5 className="page__title-3">InvencMax 3.0</h5>
                                    </div>
                                    <div className="course__meta-2 d-sm-flex mb-30">
                                    <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                                        <div className="course__teacher-thumb-3 mr-15">
                                            <img src="/assets/img/brand/iem-utm.jpg" alt="IEM UTM"/>
                                        </div>
                                        <div className="course__teacher-info-3">
                                            <h5>Organiser</h5>
                                            <p><Link href="https://t.me/IEMUTMStudentSection">IEM-UTM Student Section</Link></p>
                                        </div>
                                    </div>
                                    <div className="course__update mr-80 mb-30">
                                        <h5>Last Update:</h5>
                                        <p>April 10, 2023</p>
                                    </div>
                                    
                                    </div>
                                    <div className="course__img w-img mb-30">
                                        <img src="/assets/img/competition/invencmax.jpg" alt="InvencMax 3.0"/>
                                    </div>
                                    <Tabs>
                                        <div className="course__tab-2 mb-45">
                                            <ul className="navs nav-tabss" id="courseTab" role="tablist">
                                                <TabList>
                                                    <Tab>
                                                        <button className="nav-link" type="button" role="tab"><i className="fas fa-ribbon"></i> <span>Description</span> </button>
                                                    </Tab>
                                                       <Tab>
                                                        <button className="nav-link" type="button"><i class="fas fa-trophy"></i> <span>The Challenge</span> </button>
                                                    </Tab>
                                                   
                                                    <Tab>
                                                        <button className="nav-link" type="button">  <i className="fas fa-book"></i> <span>Rules</span>  </button>
                                                    </Tab>
                                                 
                                                    <Tab>
                                                        <button className="nav-link" type="button"> <i class="fas fa-cube"></i>
 <span>Resources</span> </button>
                                                    </Tab>
                                                </TabList>
                                            </ul>
                                        </div>
                                        <div className="course__tab-content mb-95">
                                            <div className="tab-contents">
                                                <TabPanel>
                                                    <div className="course__description">
                                                        <p>Get ready for InvencMax 3.0, the exciting competition with a theme of "Everyday Technology: TeleHealth & Debris Elimination"! We're offering students the unique opportunity to tackle real-world issues while also promoting STEAM education. <br/> <br/>

Our goal is to incentivize students to apply their STEAM knowledge and creativity to develop innovative products that address current challenges. But that's not all - we're also focused on making a positive impact on the world through sustainable engineering. By participating in this competition, students will learn to design and market sustainable products that align with the UN's Sustainable Development Goals. <br/> <br/>

Through InvencMax 3.0, students will gain valuable skills in systematic planning, product design, and marketing analysis. So why wait? Join us and take the first step towards making a difference in the world!</p>

                                                        <div className="course__tag-2 mb-35 mt-35">
                                                        <i className="fas fa-tags"></i>
                                                        <Link href="https://ieminvencmax.wixsite.com/invencmaxcompetition">InvencMax, &nbsp;</Link>
                                                        <Link href="https://hrmars.com/papers_submitted/3027/Integration_of_STEM_Education_in_Malaysia_and_Why_to_STEAM.pdf">STEAMawareness, &nbsp;</Link>
                                                        <Link href="https://sdgs.un.org/goals">SDG</Link>
                                                        </div>
                                                        <div className="course__description-list mb-45">
                                                        <h4>Eligibility</h4>
                                                        <ul>
                                                            <li> <i className="fas fa-check"></i> This competition is open to Malaysia and Singapore undergraduate
students from any field of study, preferably from a science and engineering
background.</li>
                                                            <li> <i className="fas fa-check"></i> Each participating team are only allowed to send a minimum of three (3)
and a maximum of five (5) team members including the team leader for the
competition. The combination is listed below.</li>

<ol>
    <li>i. Minimum 3 members : One (1) team leader + Two (2) team members
 </li>
<li>ii. Maximum 5 members: One (1) team leader + Four (4) team members</li>
</ol>



                                                            <li> <i className="fas fa-check"></i> All team members from each team are encouraged to be from the same
educational institution.</li>
<li><i className="fas fa-check"></i> All team members are allowed to receive help from other parties (lecturer,
teacher, advisor, researchers, etc). However, only those three (3) to five (5)
registered participants will receive any form of the award based on the registered participants.</li>
                                                        </ul>
                                                        </div>
                                            
                                                    </div>
                                                </TabPanel>

                      <TabPanel>
                                                    <div className="course__description mb-45">
                                                       <h3>The Challenge</h3>

                                                       <p className=' p-2'>  <strong>“Everyday Technology: Telehealth & Debris Elimination”</strong> is an idea highly
related to the importance of human and natural health.</p>

<p className='italic p-2'>
    Starting in 2020, there was a new type of virus that almost conquer and destroy
human lives. We experience the millions of lives lost and take years to overcome the
pandemic. This is a hard time for humans, but without our existence, the environment
is healing from pollution. According to The New York Times, Coronavirus has led to an
astonishing shutdown of economic activity and a drastic reduction in the use of fossil
fuels. In China, the pandemic caused a drop in carbon emissions of an estimated 25
percent, which is equivalent to 200 million tons of carbon dioxide. In the short term,
nature shows us how ecological would be without human activities. After the tragedy of
the pandemic, the world has formed new behaviours of lifestyles to fight against the
virus. To prevent the spreading of COVID-19, the healthcare and medical system enters
the post-pandemic era. With health awareness about the symptoms of disease, the
community start to pay attention to the minor changes in the body. Hence, there are two
major concerns that occur after the crisis, which are health and the environment.
</p>



<p className=' p-2'> In this competition, the participants are required to propose only ONE (1)
innovative product related to health and the environment.</p>

<br/>
                                                       
                                             
<h3>The Main Focus:</h3>
<p>Participants can consider ONE of the suggested issues listed for the proposed
innovation product. (Any other issues regarding the theme are also acceptable.)</p>
<ol>
    <li>1. Health</li>
     <li>2. Environment</li>
      <li>3. Waste Management</li>
       <li>4. Household product</li>
</ol>

                                            
                                         </div>
                                                </TabPanel>

                                                <TabPanel>

     <p className='pb-4'> This competition consists of 2 phases, which are <strong>PHASE ONE (Online)</strong> and <strong> PHASE TWO (Physical)</strong>
. </p>


                                                    <CourseAccordion />
                                                </TabPanel>
                          
                                                <TabPanel>
                                                    <div className="course__description-list mb-45">
                                                        
<p><strong>Registration deadline:</strong> 15th April 2023 MYT 11.59P.M.</p>
<p><strong>Registration form:</strong> <Link href="https://bit.ly/invencmax3nd_Registration" target="_blank">https://bit.ly/invencmax3nd_Registration</Link></p>
<p><strong>Information Booklet:</strong> <Link href="https://bit.ly/invencmax3nd_InformationBooklet" target="_blank">https://bit.ly/invencmax3nd_InformationBooklet</Link></p>
<br/>
<p><strong>For more information:</strong></p>
<p><strong>Official event email:</strong>  <Link href="mailto:ieminvencmax@gmail.com" target="_top">ieminvencmax@gmail.com</Link></p>
<p><strong>Wei Ren:</strong> <Link href="https://wa.me/+60137490479" target="_blank">https://wa.me/+60137490479</Link></p>
<p><strong>Cuan Kai:</strong> <Link href="https://wa.me/+60164488271" target="_blank">https://wa.me/+60164488271</Link></p>


                                                    </div>
                                                </TabPanel>
                                                <div className="course__share">
                                                    <h3>Follow IEM-UTM Student Section :</h3>
                                                    <ul>
                                                        <li><a href="https://www.facebook.com/invencmax.iemutmss" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="https://www.instagram.com/invencmax_iemutmss/" className="tw"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="https://t.me/IEMUTMStudentSection" className="pin"><i className="fab fa-telegram"></i></a></li>
                                                    <li><a href="https://www.linkedin.com/company/iemutmss/" className="tw"><i className="fab fa-linkedin"></i></a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tabs>
                                    <div className="course__related">
                                
                                  
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <CourseSidebar />
                            </div>
                        </div>
                    </div>
                </section>
				{/* course tab-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}

        	</main>
            </React.Fragment>
        );
    }
}

export default CompetitionDetailsMain;