import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import committee2223Data from '../../data/committee/2223Data';

export default () => (
    <section className="course__area pt-115 pb-120 grey-bg-2">
        <Tabs variant="enclosed" id="react-tabs-276">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-5 col-xl-6 col-lg-6">
                     <div className="section__title-wrapper mb-20">
                        <h2 className="section__title"> <span className="yellow-bg yellow-bg-big">Technical<img src="/assets/img/shape/yellow-bg.png" alt="img not found"/></span> Department</h2>
                        
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-6 col-lg-6">
                     <div className="course__menu d-flex justify-content-lg-end mb-20">
                        <div className="masonary-menu filter-button-group">
                           <TabList>
                                <Tab><button>Electrical & Electronic</button></Tab>
                                <Tab><button>Mechanical</button></Tab>
                                <Tab><button>Civil</button></Tab>
                                <Tab><button>Chemical</button></Tab>
                            </TabList>
                       </div>
                     </div>
                  </div>
               </div>
               <TabPanel>
               <div className="row">
               { committee2223Data.slice(8, 15).map(item => (
               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                     <div className="teacher__thumb w-img fix">
                        <img className=" w-32 h-64" src={item.img} alt="img not found" />
                     </div>
                     <div className="teacher__content">
                        <h3 className="teacher__title">{item.name}</h3> 
                        <h4 className="p-2"><span>{item.position}</span></h4>
                     </div>
                  </div>
               </div>
                    ))}
               </div>
               </TabPanel>
               <TabPanel>
               <div className="row">
               { committee2223Data.slice(15, 22).map(item => (
               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                     <div className="teacher__thumb w-img fix">
                        <img className=" w-32 h-64" src={item.img} alt="img not found" />
                     </div>
                     <div className="teacher__content">
                        <h3 className="teacher__title">{item.name}</h3> 
                        <h4 className="p-2"><span>{item.position}</span></h4>
                     </div>
                  </div>
               </div>
               ))}
                  
               </div>
               </TabPanel>
               <TabPanel>
               <div className="row">
                  { committee2223Data.slice(22, 28).map(item => (
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <img className=" w-32 h-64" src={item.img} alt="img not found" />
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">{item.name}</h3> 
                           <h4 className="p-2"><span>{item.position}</span></h4>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
               </TabPanel>
               <TabPanel>
               <div className="row">
               { committee2223Data.slice(28, 34).map(item => (
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <img className=" w-32 h-64" src={item.img} alt="img not found" />
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title">{item.name}</h3> 
                           <h4 className="p-2"><span>{item.position}</span></h4>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
               </TabPanel>
               <TabPanel>
               <div className="row">
                  { committee2223Data.slice(34, 40).map(item => (
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                           <div className="teacher__thumb w-img fix">
                              <img className="object-fill w-32 h-64" src={item.img} alt="img not found" />
                           </div>
                           <div className="teacher__content">
                              <h3 className="teacher__title">{item.name}</h3> 
                              <h4 className="p-2"><span>{item.position}</span></h4>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               </TabPanel>
            </div>
        </Tabs>
    </section>
);