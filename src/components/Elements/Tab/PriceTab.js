import React, { Component } from 'react';

import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import membershipData from '../../../data/membershipData';
 
export default function PriceTab() {


    return (
    <section className="price__area pt-60 pb-130">
        <Tabs>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 offset-xxl-4">
                        <div className="section__title-wrapper mb-60 text-center">
                            <h2 className="section__title">Membership 
 <br/> All Inclusive  <span className="yellow-bg yellow-bg-big">Pricing<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span></h2>
                            <p>Fees & Annual Subscriptions.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="price__tab-btn text-center mb-50">
                            <div className="nav-tabs">
                                <TabList>
                                    <Tab><button className="nav-link" id="nav-monthly-tab" type="button">Per annum</button></Tab>
                                    <Tab><button className="nav-link" id="nav-annually-tab" type="button">One time membership</button></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>
                </div>

             
                <div className="row">
                    <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                        <div className="price__tab-content">

                        
                            <TabPanel>
                                <div className="row">
                                { membershipData.map((item) => {

                                
                                return    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                        <div className="price__offer">
                                            <span>{item.value}</span>
                                        </div>
                                        <div className="price__head">
                                            <h3>{item.package}</h3>
                                            <p>{item.summary}</p>
                                        </div>
                                        <div className="price__tag mb-25">
                                            <h4>RM{item.ringgit}<span>.{item.sen} </span></h4>
                                        </div>
                                        <div className="price__features mb-40">
                                            <ul>

                                            {item.benefits.map((benefit, index) => {
                                               return <li key={index}><i className="fas fa-check"></i>{benefit}</li>
                                            })}

                                            
                                            </ul>
                                        </div>
                                        <Link href="/contact"><a className="e-btn e-btn-4">Get Started</a></Link>
                                        </div>
                                    </div>
                                    })}
                    
                        
                                </div>
                            </TabPanel>
                   
                            <TabPanel>
                                
                                <div className="row">
                                { membershipData.reverse().map((item) => {                         
                                    return    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="price__item grey-bg mb-30 p-relative">
                                            <div className="price__offer">
                                            <span>{item.value}</span>
                                            </div>
                                            <div className="price__head">
                                                <h3>{item.package}</h3>
                                                <p>{item.summary}</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>RM{item.ringgit}<span>.{item.sen} </span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>

                                                {item.benefits.map((benefit, index) => {
                                                return <li key={index}><i className="fas fa-check"></i>{benefit}</li>
                                                        })}

                                                
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-4">Get Started</a></Link>
                                            </div>
                                        </div>
                                        })}
            
                                    </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>
        </Tabs>
 </section>
 )

}