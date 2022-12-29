import React, { Component } from 'react';
import CourseSidebarTab from '../Elements/Tab/CourseSidebarTab';
import PaginationSection from '../Common/Pagination';
import SidebarMain from '../Sidebar/SidebarMain';

 
export default () => (
    <section className="course__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <CourseSidebarTab />
                     <PaginationSection />
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="course__sidebar pl-70">
                        <SidebarMain />
                     </div>
                  </div>
               </div>
            </div>
    </section>
);